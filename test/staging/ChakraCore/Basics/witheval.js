// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/witheval.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var x = { a: "x.a", f: function() { return this.a; } };
var y = { a: "y.a", f: function() { return this.a; } };
var a = "glo.a";
function f() {
    return this.a;
}

with (x) {
    with (y) {
        eval("WScript.Echo(f())");
        eval("WScript.Echo(x.f(), f())");
    }
    eval("WScript.Echo(x.f(), f())");
}
eval("WScript.Echo(y.f(), x.f(), f())");

with (Math) {
    with (9) {
        with (8) {
            with (7) {
                with (6) {
                    WScript.Echo(eval("abs(valueOf())"));
                }
            }
        }
    }
}

chakraCoreAdaptor.verifyTest(`y.a
x.a y.a
x.a x.a
y.a x.a glo.a
6
`);
