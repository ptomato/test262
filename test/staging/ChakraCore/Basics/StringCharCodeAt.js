// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/StringCharCodeAt.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function test(s, i)
{
    var ch = s.charCodeAt(i);
    WScript.Echo(ch);
}

var s = "Hello";

// Valid range
test(s, 0);
test(s, 1);

// Invalid range
test(s, -1);
test(s, 10);

// position.ToInteger()
test(s, 2.32);
test(s, Math.PI);

chakraCoreAdaptor.verifyTest(`72
101
NaN
NaN
108
108
`);
