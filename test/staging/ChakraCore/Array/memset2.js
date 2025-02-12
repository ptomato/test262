// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/memset2.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
// Compares the value set by interpreter with the jitted code
// need to run with -mic:1 -off:simplejit -off:JITLoopBody
// Run locally with -trace:memop -trace:bailout to help find bugs

function test(x)
{
  for(var i = 0; i < 10; i++)
  {
    x[i] = 0;
  }

  //Invalid memset
  for(var i = 0; i < 10; i++)
  {
    x[i] = 1;
    x[i / 2] = 3;
  }

  var c = 0;

  //valid memset
  for(var i = 0; i < 10; i++)
  {
    x[i] = 2;
    c += x[i];
  }
  //Invalid memset
  for(var i = 0; i < 9; i++)
  {
    x[i] = 3;
    c += x[i / 2];
  }
}


var x = new Array();
test(x);

var x2 = new Array();
test(x2);
compareResults(0, x.length);

var passed = 1;
function compareResults(start, end) {
  for(var i = start; i < end; i++)
  {
    if(x[i] !== x2[i])
    {
      print(`Invalid value: a[${i}] != b[${i}]`);
      passed = 0;
      break;
    }
  }
}

if(passed === 1)
{
  WScript.Echo("PASSED");
}
else
{
  WScript.Echo("FAILED");
}



chakraCoreAdaptor.verifyTest();
