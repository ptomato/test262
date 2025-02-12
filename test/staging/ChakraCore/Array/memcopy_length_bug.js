// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/memcopy_length_bug.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
var func2 = function () {
  var v5 = ary.length;
  for (var i = -1; i < v5; i++) {
    dst[i] = ary[i];
  }
};
var dst = Array();
var ary = Array();
ary.length = 100;
ary[0] = 15;
ary[1] = 178;
ary[2] = 987;

func2();
if (
  dst.length !== 100 ||
  dst[0] !== 15 ||
  dst[1] !== 178 ||
  dst[2] !== 987
) {
  print("FAILED");
} else {
  print("PASSED");
}

chakraCoreAdaptor.verifyTest();
