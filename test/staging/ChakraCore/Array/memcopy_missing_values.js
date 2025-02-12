// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/memcopy_missing_values.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
//-mic:1 -off:simplejit -bgjit- -lic:1
function func1() {
  for (var i = 3; i < ary.length; i++) {
    ary[i] = ary[i];
  }
}
var ary = Array(10).fill(0);
func1();
ary.length = 100;
ary.push(ary.shift());
func1();
func1();
print(ary);

chakraCoreAdaptor.verifyTest(`0,0,0,0,0,0,0,0,0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0
`);
