// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/bug945376SegLeftPlusSizeGreaterThanMaxArrayLen.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
var a = [];
a[4294967290] = 4;
a.splice(0,0,0,1); //length grows by 2
a.push(4);
WScript.Echo("PASS");
chakraCoreAdaptor.verifyTest();
