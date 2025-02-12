// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/SegmentMapFlagResetInJSArrayConstructor.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
var shouldBailout = false;
function test0(){
  var FloatArr0 = [231762358,-2147483648,438008391,138,2.12355879560872E+18];
  FloatArr0[12] = 1;
  FloatArr0[6] = 1;
  if(FloatArr0[((shouldBailout ? (FloatArr0[1] = 'x') : undefined ), 1)]) {
  }
};

// generate profile
test0();
// Run Simple JIT
test0();
test0();

// run JITted code
runningJITtedCode = true;
test0();

// run code with bailouts enabled
shouldBailout = true;
test0();
WScript.Echo("Pass");
chakraCoreAdaptor.verifyTest();
