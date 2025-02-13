// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/withBug940841_2.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
function test4() {
  with ({ x: 1 % {}}) 
  {
    for (var i = 0; i < 1; i++) {
      x;
    }
  }
}
test4();
test4();
WScript.Echo("PASS");

chakraCoreAdaptor.verifyTest();
