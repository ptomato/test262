// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/Logical.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var x = 0;
var y = 1;

var z = x && WScript.Echo("Should have short-circuited '&&' (1)");
WScript.Echo("z == " + z + " (2)");
z = y || WScript.Echo("Should have short-circuited '||' (3)");
WScript.Echo("z == " + z + " (4)");

z = y && WScript.Echo("z == " + z + " (5)");
z = x || WScript.Echo("z == " + z + " (6)");

z = 1;
if (x || !(z = 0)) {
    WScript.Echo("z == " + z + " (7)");
}

z = 2;
if (y && !(z = 0)) {
    WScript.Echo("z == " + z + " (8)");
}

z = 0;
if (!y && (z = 3)) {
    WScript.Echo("Should not be here (9)");
}
WScript.Echo("z == " + z + " (10)");

z = 0;
if (!x || (z = 4)) {
    WScript.Echo("z == " + z + " (11)");
}


chakraCoreAdaptor.verifyTest(`z == 0 (2)
z == 1 (4)
z == 1 (5)
z == undefined (6)
z == 0 (7)
z == 0 (8)
z == 0 (10)
z == 0 (11)
`);
