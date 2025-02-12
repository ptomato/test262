// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/bug11370283.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*///Switches: -bgjit- -lic:1
var a = Array(10).fill();
function foo() {
  for (var k = 0; k < a.length; ++k) {
    if (k == 0) {
      k += 1;
    }
    a[k];
  }
}
foo();
print("passed");

chakraCoreAdaptor.verifyTest();
