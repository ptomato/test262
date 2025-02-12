// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/join2.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function write(v) { WScript.Echo(v); }

Object.prototype.join = Array.prototype.join;

var n = 10;
var a = new Array();
var o = new Object();

for (var i=0; i<10; i++) {
    o[i] = a[i] = i * i + 1;
}

write(o.join());

write(o.join(undefined));

write(o.join("hello"));

write(a.join(a));
write(o.join(a));

write(a.join(o));
write(o.join(o));

write(Array.prototype.join.call(a, a));
write(Array.prototype.join.call(o, a));

write(Array.prototype.join.call(a, o));
write(Array.prototype.join.call(o, o));

//implicit calls
var a ;
var arr = [10];
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){a = true; return 30;}});
a = false;
arr.length = 6;
var f = arr.join();
WScript.Echo(a);

Object.prototype['length'] = 2;
WScript.Echo(([""].join).call(5));
Object.prototype['0'] = "test";
WScript.Echo(([""].join).call(5.5));

chakraCoreAdaptor.verifyTest(`


11,2,5,10,17,26,37,50,65,8221,2,5,10,17,26,37,50,65,8251,2,5,10,17,26,37,50,65,82101,2,5,10,17,26,37,50,65,82171,2,5,10,17,26,37,50,65,82261,2,5,10,17,26,37,50,65,82371,2,5,10,17,26,37,50,65,82501,2,5,10,17,26,37,50,65,82651,2,5,10,17,26,37,50,65,8282

1[object Object]2[object Object]5[object Object]10[object Object]17[object Object]26[object Object]37[object Object]50[object Object]65[object Object]82

11,2,5,10,17,26,37,50,65,8221,2,5,10,17,26,37,50,65,8251,2,5,10,17,26,37,50,65,82101,2,5,10,17,26,37,50,65,82171,2,5,10,17,26,37,50,65,82261,2,5,10,17,26,37,50,65,82371,2,5,10,17,26,37,50,65,82501,2,5,10,17,26,37,50,65,82651,2,5,10,17,26,37,50,65,8282

1[object Object]2[object Object]5[object Object]10[object Object]17[object Object]26[object Object]37[object Object]50[object Object]65[object Object]82

true
,
test,
`);
