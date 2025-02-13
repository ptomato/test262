// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/Parameters.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function dump(a)
{
    if (a == null)
    {
        WScript.Echo("'null'");
    }
    else if (a == undefined)
    {
        WScript.Echo("'undefined'");
    }
    else
    {
        WScript.Echo(a);
    }
}


function f1(a, b)
{
    // TODO: Dump arguments.length, argument entries, etc.

    dump("f1(a, b)");
    dump(a);
    dump(b);
}


// Correct number of parameters
f1(1, 2);

// Extra parameters
f1(1, 2, 3, 4);

// Not enough parameters
f1(1);

chakraCoreAdaptor.verifyTest(`f1(a, b)
1
2
f1(a, b)
1
2
f1(a, b)
1
'null'
`);
