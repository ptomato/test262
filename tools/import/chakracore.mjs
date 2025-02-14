import { strict as assert } from 'node:assert';
import dedent from 'dedent';
import fs from 'node:fs';
import { mkdirp } from 'mkdirp';
import XML from '@rgrove/parse-xml';
import path from 'node:path';
import url from 'node:url';
import util from 'node:util';

const knownFailures = {
  Array: [
    // https://github.com/chakra-core/ChakraCore/issues/5033
    "Array_TypeConfusion_bugs.js",
    "protoLookupWithGetters.js",

    // Depends on implementation-defined toLocaleString output
    "toLocaleString.js",

    // TODO
    // SpiceBtreeMemoryCorruption.js - passes but log isn't recognized
    // array_slice2.js - times out
    // array_sort.js - needs LoadScript(samethread) semantics
    // bug1065362.js - times out
    // bug945376SegLeftPlusSizeGreaterThanMaxArrayLen.js - times out
    // bug945376SizeBoundStartSeg.js - times out
    // shift_unshift.js - times out
  ],
  Basics: [
    // TODO: file bug, property `b` re-added out of order
    "DeleteProperty1.js",

    // TODO: file bug, Math.LOG2E has the wrong value
    "flags.js",

    // TODO: change test to not depend on error message, or at least prefix the
    // error type so it gets picked up by the heuristic
    "scan.js",

    // https://github.com/chakra-core/ChakraCore/issues/5513
    // Depends on implementation-specific extension,
    // globalThis.toString() === '[object global]'
    "scopedaccessors.js",

    // Depends on implementation-defined Function.prototype.toString output
    // (implementations are not required to prefix 'get ' and 'set ')
    "ScriptFunctionToStrings.js",

    // Uses internal ChakraCore tracing API
    // TODO: can this be detected from the test file?
    "VerifyParserState.js",
    "VerifySkipNestedDeferred.js",

    // TODO
    // Labels.js - requires WScript.LoadModule
    // SpecialSymbolCapture.js - not sure whose bug this is yet
    // With-defer-block-scope.js - not sure whose bug this is yet
    // bug650104.js - tests need to be wrapped in try-catch
    // cross_site_accessor_main.js - requires WScript.LoadScriptFile
  ],
};

// This script lives in tools/import/
const test262Dir = path.resolve(url.fileURLToPath(import.meta.url), '..', '..', '..');

const argsConfig = {
  options: {
    chakraCoreDir: {
      type: 'string',
      short: 'c',
      required: true,
      description: 'Path to the ChakraCore git checkout',
    },
    help: {
      type: 'boolean',
      short: 'h',
      description: 'Show this message',
    },
  },
};
const { values: { chakraCoreDir, help } } = util.parseArgs(argsConfig);

if (help) {
  console.log('ChakraCore test importer');
  for (let option in argsConfig.options) {
    const {required, description} = argsConfig.options[option];
    console.log(`  --${option.padEnd(15)} - ${description} ${required ? '(required)' : ''}`);
  }
  process.exit(0);
}

if (!chakraCoreDir) {
  console.log('Provide the path of the ChakraCore checkout with --chakraCoreDir');
  process.exit(1);
}

const UTF8 = { encoding: 'utf-8' };

function expectOneChild(xmlNode, childName) {
  const childElements = xmlNode.children.filter(node => node instanceof XML.XmlElement);
  assert.equal(childElements.length, 1, `Expected only one child of <${xmlNode.name}>`);
  assert.equal(childElements[0].name, childName, `Expected <${childName}> child of <${xmlNode.name}>`);
  return childElements[0];
}

function* iterateChildren(xmlNode) {
  for (const childElement of xmlNode.children) {
    if (!(childElement instanceof XML.XmlElement))
      continue;
    yield childElement;
  }
}

function* expectChildren(xmlNode, childName) {
  for (const childElement of iterateChildren(xmlNode)) {
    assert.equal(childElement.name, childName, `Expected only <${childName}> children of <${xmlNode.name}>`);
    yield childElement;
  }
}

function expectText(xmlNode) {
  const childText = xmlNode.children.filter(node => node instanceof XML.XmlText);
  assert.equal(childText.length, 1, `Expected only text inside <${xmlNode.name}>`);
  return childText[0].text;
}

function caseInsensitivePath(folder, leafname) {
  const leaves = fs.readdirSync(folder, UTF8);
  const realCasedLeaf = leaves.find((l) => l.toLowerCase() === leafname.toLowerCase());
  return path.join(folder, realCasedLeaf ?? leafname);
}

const testDirsXml = fs.readFileSync(path.join(chakraCoreDir, 'test', 'rlexedirs.xml'), UTF8);
const testDirs = XML.parseXml(testDirsXml);

const dirsToProcess = [];
const regressExeElement = expectOneChild(testDirs, 'regress-exe');
for (const dirElement of expectChildren(regressExeElement, 'dir')) {
  const defaultElement = expectOneChild(dirElement, 'default');
  const dirInfo = {};
  for (const directiveElement of iterateChildren(defaultElement)) {
    switch (directiveElement.name) {
      case 'files':
        dirInfo.dir = expectText(directiveElement);
        break;
      case 'tags':
        const tags = expectText(directiveElement).split(',');
        if (tags.includes('exclude_noicu'))
          dirInfo.intl402 = true;
        if (tags.includes('require_wasm'))
          dirInfo.wasm = true;
        break;
      default:
        throw new Error(`Unexpected <${directiveElement.name}> child of <default>`);
    }
  }
  assert('dir' in dirInfo, 'Expected <files> child of <default>');
  dirsToProcess.push(dirInfo);
}

const extraIncludes = ['UnitTestFramework.js', 'memset_tester.js'];

dirsToProcess.splice(5, Infinity);
console.log(dirsToProcess);

for (const { dir, intl402 = false } of dirsToProcess) {
  const skipDirs = [
    '262',
    'ConfigParsing',
    'UnitTestFramework',
  ];
  if (skipDirs.includes(dir))
    continue;

  const targetDir = path.join(test262Dir, 'test', 'staging', 'ChakraCore', dir);
  mkdirp.sync(targetDir);

  const testsXml = fs.readFileSync(path.join(chakraCoreDir, 'test', dir, 'rlexe.xml'), UTF8);
  const tests = XML.parseXml(testsXml)
  const regressExeElement = expectOneChild(tests, 'regress-exe');
  for (const testElement of expectChildren(regressExeElement, 'test')) {
    const defaultElement = expectOneChild(testElement, 'default');
    const testInfo = {};
    let skip = false;
    for (const directiveElement of iterateChildren(defaultElement)) {
      switch (directiveElement.name) {
        case 'files':
          testInfo.file = expectText(directiveElement);
          if (knownFailures[dir]?.includes(testInfo.file))
            skip = true;
          break;
        case 'baseline':
          testInfo.expectedOutput = expectText(directiveElement);
          break;
        case 'compile-flags':
          const flags = expectText(directiveElement).split(' ');
          const start = flags.indexOf('-args');
          if (start >= 0) {
            const end = flags.indexOf('-endargs');
            testInfo.wscriptArgs = flags.slice(start + 1, end);
          }

          // Tests that rely on printing ChakraCore test traces will not work
          if (flags.some((flag) => flag.startsWith('-testtrace:')))
            skip = true;

          break;
        case 'tags':
        case 'timeout':
          break; // ignore
        default:
          throw new Error(`Unexpected <${directiveElement.name}> child of <default>`);
      }
    }
    assert('file' in testInfo, 'Expected <files> child of <default>');

    if (skip)
      continue;

    const testsFolder = path.join(chakraCoreDir, 'test', dir);
    const testFile = caseInsensitivePath(testsFolder, testInfo.file);
    let expectedOutput;

    // dos2unix line endings
    let testContents = fs.readFileSync(testFile, UTF8).replace(/\r/g, '');
    if (testInfo.expectedOutput) {
      const expectedOutputFile = caseInsensitivePath(testsFolder, testInfo.expectedOutput);
      expectedOutput = fs.readFileSync(expectedOutputFile, UTF8).replace(/\r/g, '');
    }

    const separatorLine = /^\/\/-+\n/d;
    const copyrightLine = /^\/\/ Copyright.*\n/d;
    const licenseLine = /^\/\/ Licensed under the (.*?) license.*\n/d;
    const copyrightLines = [];
    let license;
    // eat header separator
    let separatorMatch = separatorLine.exec(testContents);
    if (separatorMatch)
      testContents = testContents.slice(separatorMatch.indices[0][1]);
    let copyrightMatch;
    while ((copyrightMatch = copyrightLine.exec(testContents))) {
      copyrightLines.push(testContents.slice(copyrightMatch.indices[0][0], copyrightMatch.indices[0][1]));
      testContents = testContents.slice(copyrightMatch.indices[0][1]);
    }
    const licenseMatch = licenseLine.exec(testContents);
    if (licenseMatch) {
      license = licenseMatch[1];
      testContents = testContents.slice(licenseMatch.indices[0][1]);
    }
    // eat header separator
    separatorMatch = separatorLine.exec(testContents);
    if (separatorMatch)
      testContents = testContents.slice(separatorMatch.indices[0][1]);

    const includes = ['chakracore/adaptor.js'];
    if (expectedOutput)
      includes.push('compareArray.js');
    // Assume the presence of the names of certain auxiliary files mean they are
    // being imported
    includes.push(...extraIncludes
      .filter((include) => testContents.includes(include))
      .map((include) => `chakracore/${include}`));

    const fd = fs.openSync(path.join(targetDir, testInfo.file), 'w');
    for (const copyright of copyrightLines)
      fs.writeSync(fd, copyright);
    if (license)
      fs.writeSync(fd, `// SPDX-License-Identifier: ${license}\n`);
    fs.writeSync(fd, dedent`
      /*---
      esid: null
      description: ChakraCore implementation test ${dir}/${testInfo.file}
      includes: [${includes.join(', ')}]
      flags: [noStrict]
      ---*/
    `);
    if (testInfo.wscriptArgs)
      testInfo.wscriptArgs.forEach((arg) => fs.writeSync(fd, `\nWScript.Arguments.push("${arg}");`));
    if (includes.includes('chakracore/UnitTestFramework.js'))
      fs.writeSync(fd, "\nassert = unitTestFrameworkAssert;");
    fs.writeSync(fd, testContents);

    fs.writeSync(fd, '\nchakraCoreAdaptor.verifyTest(');
    if (expectedOutput)
      fs.writeSync(fd, '`' + expectedOutput + '`');
    fs.writeSync(fd, ');\n');
  }
}
