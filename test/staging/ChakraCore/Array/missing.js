// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/missing.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function write(v) { WScript.Echo(v + ""); }

Object.prototype[5]  = "obj.proto5";
Object.prototype[7]  = "obj.proto7";

Array.prototype[1]   = "arr.proto.1";
Array.prototype[2]   = "arr.proto.2";
Array.prototype[3]   = "arr.proto.3";
Array.prototype[6]   = "arr.proto.6";

var n=8;

var arr = new Array(4);
arr[1] = null;
arr[2] = undefined;

for (var i=0;i<n;i++) {
  write("arr[" + i + "] : " + arr[i]);
}

function test() {
        var x;
        switch (x) {
        default:
                [1, , ];
        }
};
test();
test();

function ArrayLiteralMissingValue()
{
  var arr1 = [1, 1, -2147483646];
  write("[] missing value:" + arr1[2]);
}
ArrayLiteralMissingValue();

function ArrayConstructorMissingValue()
{
  var IntArr0 = new Array(-1, -2147483646);
  write("Array() missing value:" + IntArr0[1]);
}
ArrayConstructorMissingValue();
chakraCoreAdaptor.verifyTest(`arr[0] : undefined
arr[1] : null
arr[2] : undefined
arr[3] : arr.proto.3
arr[4] : undefined
arr[5] : obj.proto5
arr[6] : arr.proto.6
arr[7] : obj.proto7
[] missing value:-2147483646
Array() missing value:-2147483646
`);
