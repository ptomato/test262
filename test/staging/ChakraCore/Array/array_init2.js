// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/array_init2.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/



function q28() {
    eval("var Array = function(i) { WScript.Echo(i); }");
    ct = new Array(114, 101, 100, 32, 79, 112, 101, 110, 67, 117, 98, 101, 32, 68, 72, 84, 77, 76, 32, 69, 102, 102, 101, 99, 116, 32, 45, 32, 40, 119, 119, 119, 46, 111, 112, 101, 110, 99, 117, 98, 101, 46, 99, 111, 109, 41);
};

q28();

chakraCoreAdaptor.verifyTest(`114
`);
