// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/TypePromotion.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function print(value)
{
    WScript.Echo(value);
}

//
// Verify type promotion by creating two types, then adding similar named fields in a different
// order.  This will verify that the slot indices don't collide between promotions.
//

var o1 = {},o2 = {};

o1.x = "A";
o1.y = "B";

o2.y = "C";
o2.x = "D";

print(o1.x);
print(o1.y);
print(o2.x);
print(o2.y);

chakraCoreAdaptor.verifyTest(`A
B
D
C
`);
