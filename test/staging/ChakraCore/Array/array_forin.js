// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/array_forin.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function DumpObject(o)
{
    for (var i in o)
    {
        WScript.Echo(i + " = " + o[i]);
    }
}

var a = new Array(0xFFFFFFFF);
WScript.Echo(a.length);
a[0xFFFFFFFE] = 1;

DumpObject(a);

function Foo()
{
}

Foo.prototype[3] = 101;

var o = new Foo();
o[3] = 3;
o[4] = 4;

DumpObject(o);


chakraCoreAdaptor.verifyTest(`4294967295
4294967294 = 1
3 = 3
4 = 4
`);
