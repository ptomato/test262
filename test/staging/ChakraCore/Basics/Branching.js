// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/Branching.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function main()
{
    var a;        // a = undefined
    var e = 0;

    // We shouldn't invert this branch as relational comparison involving
    // undefined always returns false.
    if (!(a >= 1))
        e = true;

    WScript.Echo("e = " + e);
}

main();

chakraCoreAdaptor.verifyTest(`e = true
`);
