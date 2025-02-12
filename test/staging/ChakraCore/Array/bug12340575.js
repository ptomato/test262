// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/bug12340575.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
Object.defineProperty(Array.prototype, 2, {get: function () { } });

var arr = {};
arr[0] = {};
arr.length = 10;
var protoObj = {};
Object.defineProperty(protoObj, 10, {});
arr.__proto__ = protoObj;

Array.prototype.sort.call(arr);
print('Pass');

chakraCoreAdaptor.verifyTest();
