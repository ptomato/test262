// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/StringFromCharCode.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function print(value)
{
    WScript.Echo(value);
}

print(String.fromCharCode(65, 66, 67));
print(String.fromCharCode(65.23, 66, 67.98));
print(String.fromCharCode('65', '66', '67'));

chakraCoreAdaptor.verifyTest(`ABC
ABC
ABC
`);
