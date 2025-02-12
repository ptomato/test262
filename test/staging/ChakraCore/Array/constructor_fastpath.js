// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/constructor_fastpath.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
function makeArray() {
  return [new Array(true), new Array("some string"), new Array(1075133691)];
}

for (let i = 0; i < 100; ++i) {
  makeArray();
}

console.log("pass");

chakraCoreAdaptor.verifyTest();
