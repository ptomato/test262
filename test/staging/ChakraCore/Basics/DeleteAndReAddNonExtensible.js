// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/DeleteAndReAddNonExtensible.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
var kNumProperties = 32;

var o = {};
for (var i = 0; i < kNumProperties; ++i)
o['a' + i] = i;

Object.preventExtensions(o); // IsNotExtensibleSupported && !this->VerifyIsExtensible

for (var i = 0; i < kNumProperties; ++i)
delete o['a' + i];

for (var i = 0; i < 0x21; ++i)
o['a0'] = 1; // calling TryUndeleteProperty again again

WScript.Echo('pass');

chakraCoreAdaptor.verifyTest();
