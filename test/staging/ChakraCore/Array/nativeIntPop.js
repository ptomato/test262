// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/nativeIntPop.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var a = [0];
a[1] = 1
a[2] = 2;
Array.prototype[3] = 3; // Should BailOut on popping this element.

a[6] = 4;

function test1()
{
    return a.pop();
}

var len = a.length;

for(i=0; i <= len; i++)
{
    WScript.Echo(test1());
}


chakraCoreAdaptor.verifyTest(`4
undefined
undefined
3
2
1
0
undefined
`);
