// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/arrayinit.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var a1=[0,4,2,[1,3,5]];
WScript.Echo(a1[3][2]);

chakraCoreAdaptor.verifyTest(`5
`);
