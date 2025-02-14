// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Adaptor for ChakraCore implementation tests
defines: [WScript, console, print, CollectGarbage, chakraCoreAdaptor]
---*/
// If verifyTest() is called with an argument, then it's necessary to include
// compareArray.js in the test.

var ArrayPrototypeJoin = Array.prototype.join;
var ArrayPrototypeMap = Array.prototype.map;
var ReflectApply = Reflect.apply;
var StringCtor = String;

let log = '';

function __print(...args) {
  const argStrings = ReflectApply(ArrayPrototypeMap, args, [StringCtor]);
  const logMsg = ReflectApply(ArrayPrototypeJoin, argStrings, [" "]);
  log += logMsg + "\n";
}

var print = __print;  // may be overwritten and hoisted in test files

const knownScriptFiles = [
  "..\\UnitTestFramework\\UnitTestFramework.js",
  "../UnitTestFramework/UnitTestFramework.js",
  ".\\memset_tester.js",
]

var WScript = {
  Arguments: [],
  Echo: __print,
  LoadModule(script, context = "self", filename) {
    if (context !== "self")
      throw new Test262Error(`WScript.LoadModule: context '${context}' not implemented`);
    throw new Test262Error("WScript.LoadModule: not implemented");
  },
  LoadScript(script, context = "self", filename) {
    if (context !== "self")
      throw new Test262Error(`WScript.LoadScript: context '${context}' not implemented`);
    void filename;
    const realm262 = $262.createRealm();
    realm262.evalScript(script);
    return realm262.global;
  },
  LoadScriptFile(path) {
    if (!(knownScriptFiles.includes(path)))
      throw new Test262Error(`WScript.LoadScriptFile: Unhandled script file path ${path}`);
  },
  Platform: {
    BUILD_TYPE: "Release",
  },
};

var console = {
  log: __print,
};

function CollectGarbage() {
  $262.gc();
}

const excMessageMatcher = /^(?:Range|Reference|Syntax|Type)Error\s*:/;
const excMessageWorkaroundMapping = new Map([
  ['Array length must be assigned a finite positive integer', function (msg) {
    try {
      [].length = -1;
    } catch (e) {
      return msg === e.message;
    }
    throw new Test262Error("Could not determine workaround exception message");
  }],

  ['Function expected', function (msg) {
    try {
      const foo = 777;
      foo();
    } catch (e) {
      const escaped = e.message.replace(/[$-\/?[-^{|}]/g, '\\$&')
        .replace(/foo|777/g, '.*')
      const matcher = new RegExp('^' + escaped + '$');
      return matcher.test(msg);
    }
    throw new Test262Error("Could not determine workaround exception message");
  }],
]);
function fuzzyMatchExceptionMessages(actual, expected) {
  // Handle the easy case where the message is prefixed with the type of the
  // error, e.g. "TypeError: Function expected". Just ignore everything after
  // the colon.
  const match = excMessageMatcher.exec(actual);
  if (match && expected.startsWith(match[0]))
    return true;

  if (excMessageWorkaroundMapping.get(expected)?.(actual))
    return true;

  return false;
}

var chakraCoreAdaptor = {
  verifyTest(expectedOutput) {
    const logLines = log.split('\n');
    if (expectedOutput) {
      const expectedLines = expectedOutput.split('\n');

      if (log !== expectedOutput) {
        // Heuristic: try to ignore differences in exception messages

        const zipped = logLines.map((line, ix) => ([line, expectedLines[ix]]));
        const matches = zipped.map(([actual, expected], ix) => {
          if (actual === expected)
            return true;
          if (fuzzyMatchExceptionMessages(actual, expected)) {
            // Overwrite the actual line with the expected line so if there are
            // still other differences, it doesn't clutter the output
            logLines[ix] = expectedLines[ix];
            return true;
          }
          return false;
        });
        if (matches.every(Boolean))
          return;
      }

      // The following prevents actual and expected from being iterated and evaluated
      // more than once unless absolutely necessary.
      if (!compareArray(logLines, expectedLines)) {
        let message;
        try {
          require("node:assert").deepStrictEqual(logLines, expectedLines, "Test log did not match expected log");
        } catch (e) {
          message = e.message;
        }
        throw new Test262Error(message);
      }

      return;
    }

    // log should be empty or contain only lines with case-insensitive 'PASS' or
    // 'Passed'
    if (log !== "" &&
      !logLines.every(l => ["", "pass", "passed"].includes(l.toLowerCase())))
      throw new Test262Error(`Expected test to log nothing or pass, but got ${log}`);
  },
};
