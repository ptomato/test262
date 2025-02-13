// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/ParameterOrder.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
//
// Test calling order of parameters:
// 1. Ensure arguments get evaluated in the correct order
// 2. Ensure arguments are passed in the correct order
//

function a()
{
    //
    // By displaying the function, we'll validate the correct evaluation order.
    //

    WScript.Echo("a()");
    return 1;
}

function b()
{
    WScript.Echo("b()");
    return 2;
}

function c(p1, p2)
{
    //
    // By performing a subtract, we'll validate that p1 and p2 are not mixed.
    //

    WScript.Echo("c(p1, p2)");
    return p1 - p2;
}

function MyClass(p1, p2) {
    //
    // By performing a subtract, we'll validate that p1 and p2 are not mixed.
    //

    WScript.Echo("MyClass(p1, p2)");
    this.value = p1 - p2;
}


//
// Test a regular function call.
//

WScript.Echo("Regular function call");

var result = c(a(), b());
WScript.Echo(result);


//
// Test a constructor function call.
//

WScript.Echo("Constructor function call");

var result = new MyClass(a(), b());
WScript.Echo(result.value);

chakraCoreAdaptor.verifyTest(`Regular function call
a()
b()
c(p1, p2)
-1
Constructor function call
a()
b()
MyClass(p1, p2)
-1
`);
