// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/nativeFloatArray_shift_unshift.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var a= [1, 2.2, 3.3]
Array.prototype[4] = 10;

function Test()
{
    WScript.Echo(a.shift());
    WScript.Echo(a.unshift(100,101,103));
}

Test();


chakraCoreAdaptor.verifyTest(`1
5
`);
