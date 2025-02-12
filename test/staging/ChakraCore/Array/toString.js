// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/toString.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var echo = WScript.Echo;

function guarded_call(func) {
    try {
        func();
    } catch (e) {
        echo(e.name + " : " + e.message);
    }
}

var testCount = 0;
function scenario(title) {
    if (testCount > 0) {
        echo("\n");
    }
    echo((testCount++) + ".", title);
}

scenario("Array: default");
var arr = [1, 2, , 3];
echo(arr);

scenario("Array: Replaced Array.prototype.join");
Array.prototype.join = function () { return "replaced Array.prototype.join" };
echo(arr);

scenario("Array: Replaced non-callable Array.prototype.join");
Array.prototype.join = 1234; // non-callable
echo(arr);

scenario("Object: no join");
var o = {};
guarded_call(function () {
    echo(Array.prototype.toString.apply(o));
});

scenario("Object: has join");
var o = {
    join: function () { return "o join"; }
};
guarded_call(function () {
    echo(Array.prototype.toString.apply(o));
});

scenario("Object: non-callable join");
var o = {
    join: 1234
};
guarded_call(function () {
    echo(Array.prototype.toString.apply(o));
});

scenario("Object: no join with toStringTag");
var o = {
    [Symbol.toStringTag]: "Replaced @@toStringTag"
};
guarded_call(function () {
    echo(Array.prototype.toString.apply(o));
});

scenario("Object: no join with getter toStringTag");
var o = {
    get [Symbol.toStringTag]() {return "Replaced @@toStringTag with a getter";}
};
guarded_call(function () {
    echo(Array.prototype.toString.apply(o));
});

scenario("Object: no join, replaced Object.prototype.toString");
var o = {};
Object.prototype.toString = function () { return "replaced Object.prototype.toString"; }
guarded_call(function () {
    echo(Array.prototype.toString.apply(o));
});

chakraCoreAdaptor.verifyTest(`0. Array: default
1,2,,3


1. Array: Replaced Array.prototype.join
replaced Array.prototype.join


2. Array: Replaced non-callable Array.prototype.join
[object Array]


3. Object: no join
[object Object]


4. Object: has join
o join


5. Object: non-callable join
[object Object]


6. Object: no join with toStringTag
[object Replaced @@toStringTag]


7. Object: no join with getter toStringTag
[object Replaced @@toStringTag with a getter]


8. Object: no join, replaced Object.prototype.toString
[object Object]
`);
