// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/concat2.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function echo(v) {
    WScript.Echo(v);
}

function guarded_call(func) {
    try {
        func();
    } catch (e) {
        echo(e.name + " : " + e.message);
    }
}

function dump_array(arr) {
    echo("length: " + arr.length);
    for (var p in arr) {
        echo("  " + p + ": " + arr[p]);
    }
}

function test_concat(size) {
    guarded_call(function () {
        var arr = new Array(size);
        arr[size - 1] = 100;

        echo("- concat 101, 102, 103, 104, 105");
        arr = arr.concat(101, 102, 103, 104, 105);
        dump_array(arr);

        echo("- arr.concat(arr)");
        arr = arr.concat(arr);
        dump_array(arr);
    });
}

echo("-------concat Small-------------");
test_concat(500);

// Fix for MSRC 33319 changes concat to skip a fast path if the index we're copying into is a BigIndex.
// Disable the large portion of this test since this change makes such a test run for hours.
//echo("-------concat Large-------------");
//test_concat(4294967294);

echo("-------test prototype lookup-------------");
for (var i = 0; i < 10; i++) {
    Array.prototype[i] = 100 + i;
}
delete Array.prototype[3];

var a = [200, 201, 202, 203, 204];
delete a[1];
a[7] = 207;

echo("a: " + a);

var r = a.concat(300, 301, 302, 303, 304);
echo("r: " + r);

delete r[8];
echo("r: " + r); // Now r[8] should come from prototype

for (var i = 0; i < 10; i++) {
    delete Array.prototype[i];
}
echo("r: " + r); // r[8] gone, other entries not affected (verify not from prototype)
chakraCoreAdaptor.verifyTest(`-------concat Small-------------
- concat 101, 102, 103, 104, 105
length: 505
  499: 100
  500: 101
  501: 102
  502: 103
  503: 104
  504: 105
- arr.concat(arr)
length: 1010
  499: 100
  500: 101
  501: 102
  502: 103
  503: 104
  504: 105
  1004: 100
  1005: 101
  1006: 102
  1007: 103
  1008: 104
  1009: 105
-------test prototype lookup-------------
a: 200,101,202,203,204,105,106,207
r: 200,101,202,203,204,105,106,207,300,301,302,303,304
r: 200,101,202,203,204,105,106,207,108,301,302,303,304
r: 200,101,202,203,204,105,106,207,,301,302,303,304
`);
