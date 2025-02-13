// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/DirectCall.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var PI = Math.PI;
var c = Math.ceil(PI);
var f = Math.floor(PI);

WScript.Echo(c, f);

(function f()
{
    // Test calls that modify the call target operands when the args are evaluated.
    // Do this locally, as that's the case that we're most likely to get wrong.

    var save;
    var O = { foo : function() { return "O.foo"; }, bar : function() { return "O.bar"; } };
    O.o = { foo : function() { return "O.o.foo"; }, bar : function() { return "O.o.bar"; } };

    WScript.Echo(O.foo(save = O, O = O.o));
    WScript.Echo(O.foo(O = save));

    var str = 'foo';
    WScript.Echo(O[str](O = O.o, str = 'bar'));
    WScript.Echo(O[str](O = save, str = 'foo'));

})();

chakraCoreAdaptor.verifyTest(`4 3
O.foo
O.o.foo
O.foo
O.o.bar
`);
