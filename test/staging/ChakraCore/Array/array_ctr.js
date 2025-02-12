// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/array_ctr.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function write(v) { WScript.Echo(v); }

var a;

a = new Array();
write(a.length);

a = new Array(10);
write(a.length);

a = new Array(new Number(10.2));
write(a.length);
write(a[0]);

a = new Array(new Array());
write(a.length);

var wo = new Object();
wo.valueOf = function() {return 12}
var we = [1, 2, 3];
we.length = "33";
write(we.length);
we.length = wo;
write(we.length);
we.length = null;
write(we.length);
try {
we.length = undefined;
write(we.length);
}
catch (e) {
    write(e.message);
}
try {
we.length = "foo";
}
catch (e) {
    write(e.message);
}
WScript.Echo(we.length);
try {
    we.length = Infinity;
    write(we.length);
}
catch (e) {
    write(e.message);
}
chakraCoreAdaptor.verifyTest(`0
10
1
10.2
1
33
12
0
Array length must be assigned a finite positive integer
Array length must be assigned a finite positive integer
0
Array length must be assigned a finite positive integer
`);
