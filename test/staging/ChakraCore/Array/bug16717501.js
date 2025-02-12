// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/bug16717501.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
function test0() {
  for (var vnlgev in [1 .__parent__ = '']) {
  }
  // Value too big to be a tagged int on 32 bit platforms
  return 1518500249 in [];
}
// Trigger jit
for (let i = 0; i < 1000; ++i) {
  test0();
}

console.log("pass");

chakraCoreAdaptor.verifyTest();
