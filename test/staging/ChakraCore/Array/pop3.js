// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/pop3.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/

function test(a)
{
    a = a.pop();
    return a;
}
var arr = [ { a : 3 }];
var r = test(arr);
WScript.Echo(r.a);

arr = [ { a: 3 }];
r = test(arr);
WScript.Echo(r.a);

// Test that popping a gap accesses the prototype chain

function f(a) {
    while (a.length > 0)
        a.pop();
}

f(['x',,'x']);
Object.defineProperty(Object.prototype,"1",{get: function(){ WScript.Echo("getter"); }, configurable:true});
f(['x',,'x']);

function f_float(a) {
    while (a.length > 0)
        a.pop();
}

delete Object.prototype[1];
var x = [1.2];
x[3] = 1.4;
f_float(x);
Object.defineProperty(Object.prototype,"1",{get: function(){ WScript.Echo("getter"); }, configurable:true});
x = [1.1];
x[2] = 1.3;
f_float(x);


chakraCoreAdaptor.verifyTest(`3
3
getter
getter
`);
