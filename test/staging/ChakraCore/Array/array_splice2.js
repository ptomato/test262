// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/array_splice2.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function write(args)
{
  WScript.Echo(args);
}

var a;
var b;

write("Scenario 1");
a = [];
a.length = 20;
b = a.splice(0,1,10);
write(a);
write(b);

write("Scenario 2");
a = [];
a.length = 20;
b = a.splice(0,0,10);
write(a);
write(b);

write("Scenario 3");
a = [];
a.length = 20;
b = a.splice(0,10);
write(a);
write(b);

write("Scenario 4");
a = [];
a.length = 20;
b = a.splice(0,1,1);
write(a);
write(b);

write("Scenario 5");
a = [];
a.length = 20;
b = a.splice(10,1,1);
write(a);
write(b);


write("Scenario 6");
a = [];
b = a.splice(0,1,1);
write(a);
write(b);


write("Scenario 7");
a = [];
a[10] = 10;
a[15] = 20;
b = a.splice(10,1);
write(a);
write(b);


write("Scenario 8");
a = [];
a[10] = 10;
a[15] = 20;
b = a.splice(10,5);
write(a);
write(b);


write("Scenario 9");
a = [];
a[10] = 10;
a[15] = 20;
b = a.splice(10,5,20);
write(a);
write(b);

write("Scenario 10");
a = [];
a[10] = 10;
a[15] = 20;
b = a.splice(10,5,20);
write(a);
write(b);

write("Scenario 11");
a = [];
a[10] = 10;
a[15] = 20;
b = a.splice(10,10,20);
write(a);
write(b);

write("Scenario 12");
a = [];
a[10] = 10;
a[15] = 20;
b = a.splice(10,1,20,30,40);
write(a);
write(b);

write("Scenario 13");
a = [];
a[10] = 10;
a[15] = 20;
b = a.splice(10,0,20,30,40);
write(a);
write(b);

write("Scenario 13");
a = [];
a[10] = 10;
a[15] = 20;
b = a.splice(10,6,20,30,40,50,60,70);
write(a);
write(b);

write("Scenario 14");
a = [];
a[10] = 10;
a[15] = 20;
b = a.splice(10,6,20,30,40,50,60,70);
write(a);
write(b);

write("Scenario 15");
a = [];
a[10] = 10;
a[15] = 20;
b = a.splice(10,10,20,30,40,50,60,70);
write(a);
write(b);

write("Scenario 15");
a = [];
a[10] = 10;
a[11] = 11;
a[15] = 20;
a[16] = 21;
b = a.splice(10,10,20,30,40,50,60,70);
write(a);
write(b);

write("Scenario 16");
a = [];
a[40] = 123; // creates a 2nd segment
b = a.splice(30, 11); // splice in between the 2 segments
write(a);
write(b);


//------ overflow tests ---------
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
        if (+p == p) {
            echo("  " + p + ": " + arr[p]);
        }
    }
}

echo("--- splice overflow 1");
var a = [];
guarded_call(function () {
    a[4294967290] = 100;
    a.splice(4294967294, 0, 200, 201, 202, 203, 204);
});
dump_array(a);

echo("--- splice overflow 2");
var a = [];
guarded_call(function () {
    var base = 4294967290;
    for (var i = 0; i < 10; i++) {
        a[base + i] = 100 + i;
    }
    a.splice(4294967290, 0, 200, 201, 202, 203, 204, 205, 206);
});
dump_array(a);

echo("--- splice overflow 3");
var a = [];
guarded_call(function () {
    var base = 4294967290;
    for (var i = 0; i < 10; i++) {
        a[base + i] = 100 + i;
    }
    delete a[base + 3];
    a.splice(4294967290, 0, 200, 201, 202, 203, 204, 205, 206);
});
dump_array(a);

echo("--- splice overflow 3");
var a = [];
guarded_call(function () {
    var base = 4294967290;
    for (var i = 0; i < 10; i++) {
        a[base + i] = 100 + i;
    }
    delete a[base + 3];
    a.splice(4294967290, 2);
});
dump_array(a);


echo("--- splice object overflow");
Object.prototype.splice = Array.prototype.splice;
var obj = new Object();
obj.length = 4294967295;
obj[4294967294] = "Eze";
var arr = obj.splice(4294967293, 4294967295, 1, 2, 3);
echo(obj.length);

echo("--- splice object delete");
Object.prototype.splice = Array.prototype.splice;
var obj = new Object();
for (var i = 0; i < 10; i++) {
    obj[i] = 100 + i;
}
obj.length = 10;
delete obj[4];
dump_array(obj);
obj.splice(0, 0, 200, 201);
dump_array(obj);
chakraCoreAdaptor.verifyTest(`Scenario 1
10,,,,,,,,,,,,,,,,,,,

Scenario 2
10,,,,,,,,,,,,,,,,,,,,

Scenario 3
,,,,,,,,,
,,,,,,,,,
Scenario 4
1,,,,,,,,,,,,,,,,,,,

Scenario 5
,,,,,,,,,,1,,,,,,,,,

Scenario 6
1

Scenario 7
,,,,,,,,,,,,,,20
10
Scenario 8
,,,,,,,,,,20
10,,,,
Scenario 9
,,,,,,,,,,20,20
10,,,,
Scenario 10
,,,,,,,,,,20,20
10,,,,
Scenario 11
,,,,,,,,,,20
10,,,,,20
Scenario 12
,,,,,,,,,,20,30,40,,,,,20
10
Scenario 13
,,,,,,,,,,20,30,40,10,,,,,20

Scenario 13
,,,,,,,,,,20,30,40,50,60,70
10,,,,,20
Scenario 14
,,,,,,,,,,20,30,40,50,60,70
10,,,,,20
Scenario 15
,,,,,,,,,,20,30,40,50,60,70
10,,,,,20
Scenario 15
,,,,,,,,,,20,30,40,50,60,70
10,11,,,,20,21
Scenario 16
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
,,,,,,,,,,123
--- splice overflow 1
RangeError : Array length must be assigned a finite positive integer
length: 4294967295
  4294967290: 100
  4294967291: 200
  4294967292: 201
  4294967293: 202
  4294967294: 203
  4294967295: 204
--- splice overflow 2
RangeError : Array length must be assigned a finite positive integer
length: 4294967295
  4294967290: 200
  4294967291: 201
  4294967292: 202
  4294967293: 203
  4294967294: 204
  4294967295: 205
  4294967296: 206
  4294967297: 100
  4294967298: 101
  4294967299: 102
  4294967301: 104
  4294967300: 103
--- splice overflow 3
RangeError : Array length must be assigned a finite positive integer
length: 4294967295
  4294967290: 200
  4294967291: 201
  4294967292: 202
  4294967293: 203
  4294967294: 204
  4294967295: 205
  4294967296: 206
  4294967297: 100
  4294967298: 101
  4294967299: 102
  4294967301: 104
--- splice overflow 3
length: 4294967293
  4294967290: 102
  4294967292: 104
  4294967295: 105
  4294967296: 106
  4294967297: 107
  4294967298: 108
  4294967299: 109
--- splice object overflow
4294967296
--- splice object delete
length: 10
  0: 100
  1: 101
  2: 102
  3: 103
  5: 105
  6: 106
  7: 107
  8: 108
  9: 109
length: 12
  0: 200
  1: 201
  2: 100
  3: 101
  4: 102
  5: 103
  7: 105
  8: 106
  9: 107
  10: 108
  11: 109
`);
