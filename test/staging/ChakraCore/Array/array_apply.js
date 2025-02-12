// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/array_apply.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var arr=new Array(1,2,3,4,5,6);
WScript.Echo(arr);
var newarr = Array.apply(this, arr);
WScript.Echo(newarr);
chakraCoreAdaptor.verifyTest(`1,2,3,4,5,6
1,2,3,4,5,6
`);
