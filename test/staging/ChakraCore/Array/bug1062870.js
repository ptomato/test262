// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/bug1062870.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
var a = [];
a[4294967294] = 8;
try
{
    a.splice(4294967295,0,1); //length grows by 1
}
catch(e)
{
    WScript.Echo("PASS");
}
chakraCoreAdaptor.verifyTest();
