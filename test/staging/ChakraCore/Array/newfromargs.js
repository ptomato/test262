// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/newfromargs.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/

Array.prototype[1] = 100;
function f(param)
{
    var a = new Array(1, param, 3);
    return a;
}

WScript.Echo(f(undefined)[1]);
WScript.Echo(f(undefined)[1]);  // undefined in array parameter should still be set (legacy behavior is missing value)

chakraCoreAdaptor.verifyTest(`undefined
undefined
`);
