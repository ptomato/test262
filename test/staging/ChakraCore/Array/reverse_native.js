// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/reverse_native.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var a= [1, 2.2, 3.3]
Array.prototype[4] = 10;

function Test()
{
    a.reverse();
    WScript.Echo(a);
}

Test();


chakraCoreAdaptor.verifyTest(`3.3,2.2,1
`);
