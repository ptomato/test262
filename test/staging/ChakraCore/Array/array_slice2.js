// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/array_slice2.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function echo(v) {
    WScript.Echo(v);
}

echo("-------slice sparse array-------------");
function dump_array(arr) {
    echo("length: " + arr.length);
    for (var p in arr) {
        echo("  " + p + ": " + arr[p]);
    }
}

echo("-- arr1");
var arr = [];
arr[2147483647] = 100;
var newarr = arr.slice(0, 2147483648);
dump_array(newarr);

echo("-- arr2");
var arr = [];
var base = 4294967290;
for (var i = 0; i < 10; i++) {
    arr[base + i] = 100 + i;
}
echo("-src");
dump_array(arr);
echo("-sliced");
var newarr = arr.slice(2147483648, 4294967299);
dump_array(newarr);


echo("-------test prototype lookup-------------");
function test_slice(start, end) {

    for (var i = 0; i < 10; i++) {
        Array.prototype[i] = 100 + i;
    }
    delete Array.prototype[3];

    var a = [200, 201, 202, 203, 204];
    delete a[1];
    a[7] = 207;

    var astr = "" + a;
    var r = a.slice(start, end);

    for (var i = 0; i < 10; i++) {
        delete Array.prototype[i];
    }

    echo(astr + " ==> [" + start + ".." + end + "]: " + r);
}

test_slice(0, 0);
test_slice(0, 5);
test_slice(0, 7);
test_slice(0, 8);
test_slice(0, 100);
test_slice(2, 0);
test_slice(2, 5);
test_slice(2, 7);
test_slice(2, 8);
test_slice(2, 100);
test_slice(7, 0);
test_slice(7, 5);
test_slice(7, 7);
test_slice(7, 8);
test_slice(7, 100);
test_slice(8, 0);
test_slice(8, 5);
test_slice(8, 7);
test_slice(8, 8);
test_slice(8, 100);

chakraCoreAdaptor.verifyTest(`-------slice sparse array-------------
-- arr1
length: 2147483648
  2147483647: 100
-- arr2
-src
length: 4294967295
  4294967290: 100
  4294967291: 101
  4294967292: 102
  4294967293: 103
  4294967294: 104
  4294967295: 105
  4294967296: 106
  4294967297: 107
  4294967298: 108
  4294967299: 109
-sliced
length: 2147483647
  2147483642: 100
  2147483643: 101
  2147483644: 102
  2147483645: 103
  2147483646: 104
-------test prototype lookup-------------
200,101,202,203,204,105,106,207 ==> [0..0]: 
200,101,202,203,204,105,106,207 ==> [0..5]: 200,101,202,203,204
200,101,202,203,204,105,106,207 ==> [0..7]: 200,101,202,203,204,105,106
200,101,202,203,204,105,106,207 ==> [0..8]: 200,101,202,203,204,105,106,207
200,101,202,203,204,105,106,207 ==> [0..100]: 200,101,202,203,204,105,106,207
200,101,202,203,204,105,106,207 ==> [2..0]: 
200,101,202,203,204,105,106,207 ==> [2..5]: 202,203,204
200,101,202,203,204,105,106,207 ==> [2..7]: 202,203,204,105,106
200,101,202,203,204,105,106,207 ==> [2..8]: 202,203,204,105,106,207
200,101,202,203,204,105,106,207 ==> [2..100]: 202,203,204,105,106,207
200,101,202,203,204,105,106,207 ==> [7..0]: 
200,101,202,203,204,105,106,207 ==> [7..5]: 
200,101,202,203,204,105,106,207 ==> [7..7]: 
200,101,202,203,204,105,106,207 ==> [7..8]: 207
200,101,202,203,204,105,106,207 ==> [7..100]: 207
200,101,202,203,204,105,106,207 ==> [8..0]: 
200,101,202,203,204,105,106,207 ==> [8..5]: 
200,101,202,203,204,105,106,207 ==> [8..7]: 
200,101,202,203,204,105,106,207 ==> [8..8]: 
200,101,202,203,204,105,106,207 ==> [8..100]: 
`);
