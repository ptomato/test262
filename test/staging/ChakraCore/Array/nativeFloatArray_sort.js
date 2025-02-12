// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/nativeFloatArray_sort.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var a= [3.3, 2.2, 1]
Array.prototype[4] = 10;

function Test()
{
    a.sort(function(){return -1});
    WScript.Echo(a);
}

Test();

chakraCoreAdaptor.verifyTest(`1,2.2,3.3
`);
