// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/Length.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function write(v) { WScript.Echo(v + ""); }

var o = new Object();
o.length = 10;
write(o.length + " " + o["length"] + " " + o["len" + "gth"]);

o.length = 20;
write(o.length + " " + o["length"] + " " + o["len" + "gth"]);


var s = "Hello World";
write(s.length + " " + s["length"] + " " + s["len" + "gth"]);

var x = s.length = 30;

write(x);
write(s.length + " " + s["length"] + " " + s["len" + "gth"]);

var o1 = new Object();
var a = [1000,2000,3000];

// Normal index
write(a[0] + " " + a["0"] + " " + a[0.0]);

// 'x' Expando
a.x = 40;

write(a.x + " " + a["x"]);

// object o as expando
a[o] = 50;
write(a[o] + " " + a[o1] + " " + a["[object Object]"] + " " + a["[object" + " Object]"]);


// array length
write(a.length + " " + a["length"] + " " + a["len" + "gth"]);

a.length = 60;
write(a.length + " " + a["length"] + " " + a["len" + "gth"]);

a["length"] = 70;
write(a.length + " " + a["length"] + " " + a["len" + "gth"]);

a["le" + "ngth"] = 80;
write(a.length + " " + a["length"] + " " + a["len" + "gth"]);

function foo() {};
write(foo.length + " " + foo["length"] + " " + foo["len" + "gth"]);

function foo1(x) {};
write(foo1.length + " " + foo1["length"] + " " + foo1["len" + "gth"]);

function foo2(x,y,z) {};
write(foo2.length + " " + foo2["length"] + " " + foo2["len" + "gth"]);

eval("function foo3(x,y){};");
write(foo3.length + " " + foo3["length"] + " " + foo3["len" + "gth"]);

chakraCoreAdaptor.verifyTest(`10 10 10
20 20 20
11 11 11
30
11 11 11
1000 1000 1000
40 40
50 50 50 50
3 3 3
60 60 60
70 70 70
80 80 80
0 0 0
1 1 1
3 3 3
2 2 2
`);
