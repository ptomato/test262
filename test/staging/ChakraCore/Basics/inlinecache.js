// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/inlinecache.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function write(v) { WScript.Echo(v + ""); }

function Test1() {
    write(Math.PI);
    write(Math.PI);
    Math.PI++;
    write(Math.PI);
    write(Math.PI);
}

Test1();

function Test2() {
    var a = [ 10, 20]

    write(a.concat());
    write(a.concat());
}

Test2();

function Test3() {

    function f() { write("in f"); }

    var o = {};
    Object.defineProperty(o, "x", { writable: false, value: f });

    write(o.x);
    o.x();
    o.x();
    write(o.x);
}

Test3();

function Test4() {

 Object.defineProperty(this, "x", ({get: function(){}}));
 eval("for(var i=0;i< 10; i++ ) {x=20;}");

}
Test4();

chakraCoreAdaptor.verifyTest(`3.141592653589793
3.141592653589793
3.141592653589793
3.141592653589793
10,20
10,20
function f() { write("in f"); }
in f
in f
function f() { write("in f"); }
`);
