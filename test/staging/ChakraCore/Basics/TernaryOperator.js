// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/TernaryOperator.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
WScript.Echo("Setting condition to true...");
var cond = true;
WScript.Echo(cond ? "True" : "False");

WScript.Echo("Setting condition to false...");
cond = false;
WScript.Echo(cond ? "True" : "False");

try {
  for (1 ? 'x' in {} : 0;;) break;
} catch {
  WScript.Echo("In expression should be allowed in true part");
}

chakraCoreAdaptor.verifyTest(`Setting condition to true...
True
Setting condition to false...
False
`);
