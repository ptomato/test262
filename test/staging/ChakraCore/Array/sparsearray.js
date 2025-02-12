// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/sparsearray.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var a = new Array(0x15000); //makes this sparse

var i=0;

for(var i=50;i<60;i++)
{
  a[i] = i+10;
}

for(var i=0;i<10;i++)
{
  a[i] = i+20;
}

for(var i=100;i<110;i++)
{
  a[i] = i*10;
}

var b = new Array(0x15000); //makes this sparse

for(var i=50;i<60;i++)
{
  a[i] = i+10;
}

for(var i=0;i<10;i++)
{
  a[i] = i+20;
}

for(var i=100;i<110;i++)
{
  a[i] = i+40;
}

var c = a.concat(b);
WScript.Echo(c[50]);
WScript.Echo(c[0]);

WScript.Echo(a.shift());
WScript.Echo(a[7]);
WScript.Echo(a[8]);
WScript.Echo(a.shift());
WScript.Echo(a.length);

var  d = a.slice(10);

WScript.Echo(d[41]);
WScript.Echo(d[90]);

a.splice(45,3,"a","b","c");

WScript.Echo(a[45]);
WScript.Echo(a[46]);
WScript.Echo(a[50]);
WScript.Echo(a[100]);
WScript.Echo(a.length);

var x = [];
x[0xFFFFFFFF] = 0;
WScript.Echo(x[0xFFFFFFFF], x.length);
x[0xFFFFFFFE] = 1;
WScript.Echo(x[0xFFFFFFFE], x.length === 0xFFFFFFFF);
x[0xFFFFFFFD] = 2;
WScript.Echo(x[0xFFFFFFFD], x.length === 0xFFFFFFFF);

function errors() {
    try {
        var e1 = new Array(-0.0);
        WScript.Echo("[-0.0].length = " + e1.length);
    }
    catch(e) {
        WScript.Echo("[-0.0]: error");
    }

    try {
        var e1 = new Array(-0.01);
        WScript.Echo("[-0.01].length = " + e1.length);
    }
    catch(e) {
        WScript.Echo("[-0.01]: error");
    }

    try {
        var e1 = new Array(0.01);
        WScript.Echo("[0.01].length = " + e1.length);
    }
    catch(e) {
        WScript.Echo("[0.01]: error");
    }

    try {
        var e1 = new Array(4294967295.0);
        WScript.Echo("[4294967295.0].length = " + e1.length);
    }
    catch(e) {
        WScript.Echo("[4294967295.0]: error");
    }

    try {
        var e1 = new Array(4294967294.9);
        WScript.Echo("[4294967294.9].length = " + e1.length);
    }
    catch(e) {
        WScript.Echo("[4294967294.9]: error");
    }

    try {
        var e1 = new Array(4294967296.0);
        WScript.Echo("[4294967296.0].length = " + e1.length);
    }
    catch(e) {
        WScript.Echo("[4294967296.0]: error");
    }
}

// Very special case of a sparse array with single element at index > 0x7fffffff.
var sparse = [];
sparse[0x80000000] = "hello";
if (sparse[1] != undefined)
    WScript.Echo("Bad element in sparse array");
sparse[0] = "here i am";
WScript.Echo(sparse[0]);

errors();

// Regress Win8 611708
(function () {
    WScript.Echo("Win8 611708: bound size to max array length");

    var a = [];
    a[0xfffffffd] = 1;  // A segment at boundary
    a[0] = 0;           // Change "last" accessed segment
    a[0xfffffffe] = 2;  // Trigger the original assertion

    // Some more verification
    a[0xffffffff] = 3;
    for (var i = 0; i < 10; i++) {
        a[0x100000000 + i] = i;
    }
    WScript.Echo("length:", a.length);
    for (var p in a) {
        WScript.Echo(p + ":", a[p]);
    }
})();

chakraCoreAdaptor.verifyTest(`60
20
20
28
29
21
86014
63
142
a
b
62
142
86014
0 0
1 true
2 true
here i am
[-0.0].length = 0
[-0.01]: error
[0.01]: error
[4294967295.0].length = 4294967295
[4294967294.9]: error
[4294967296.0]: error
Win8 611708: bound size to max array length
length: 4294967295
0: 0
4294967293: 1
4294967294: 2
4294967295: 3
4294967296: 0
4294967297: 1
4294967298: 2
4294967299: 3
4294967300: 4
4294967301: 5
4294967302: 6
4294967303: 7
4294967304: 8
4294967305: 9
`);
