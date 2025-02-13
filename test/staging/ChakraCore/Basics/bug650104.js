// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/bug650104.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var obj0 = {};
obj0.method1 = function (argMath7, argArr8) {
    arguments[1] = -2885562136746910000;
  for (var _strvar4 in argArr8) {
    WScript.Echo("name: " + _strvar4 + " " + argArr8 + typeof argArr8);
    argArr8[_strvar4] = argArr8;
  }
};
Number.prototype.push = Array.push;
(obj0.method1.call({}, -2885562136746910000 > Object.create({}).length, new Array(10)));
WScript.Echo(Number.prototype.push);

Number().push();

chakraCoreAdaptor.verifyTest(`name: push -2885562136746910000number
undefined
TypeError: Object expected
	at Global code (bug650104.js:18:1)
`);
