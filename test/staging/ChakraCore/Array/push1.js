// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/push1.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function write(v) { WScript.Echo(v); }

var n = 5;

function InitObject(obj) {
    for (var i=0; i<n; i++) {
        obj[i] = i * i + 1;
    }
    obj.length = n;

    return obj;
}

function TestPush(obj) {
    write(">>> Start push test for object: " + obj);

    var ret;
    ret = Array.prototype.push.call(obj);
    write("Returned:" + ret + " obj.length:" + obj.length);

    ret = Array.prototype.push.call(obj, "");
    write("Returned:" + ret + " obj.length:" + obj.length);

    ret = Array.prototype.push.call(obj, undefined);
    write("Returned:" + ret + " obj.length:" + obj.length);

    ret = Array.prototype.push.call(obj, 100);
    write("Returned:" + ret + " obj.length:" + obj.length);

    ret = Array.prototype.push.call(obj, 1, 2);
    write("Returned:" + ret + " obj.length:" + obj.length);

    ret = Array.prototype.push.call(obj, 1, 2, 3, 4, 5);
    write("Returned:" + ret + " obj.length:" + obj.length);

    write("<<< Stop push test for object: " + obj);
}

var testList = new Array(new Array() , new Object());
for (var i=0;i<testList.length;i++) {
    TestPush(InitObject(testList[i]));
}

TestPush({}); // behavior varies by version

function bar()
{
    var n = Number();
    Number.prototype.push = Array.prototype.push;
    n.push(1);
}
bar();

chakraCoreAdaptor.verifyTest(`>>> Start push test for object: 1,2,5,10,17
Returned:5 obj.length:5
Returned:6 obj.length:6
Returned:7 obj.length:7
Returned:8 obj.length:8
Returned:10 obj.length:10
Returned:15 obj.length:15
<<< Stop push test for object: 1,2,5,10,17,,,100,1,2,1,2,3,4,5
>>> Start push test for object: [object Object]
Returned:5 obj.length:5
Returned:6 obj.length:6
Returned:7 obj.length:7
Returned:8 obj.length:8
Returned:10 obj.length:10
Returned:15 obj.length:15
<<< Stop push test for object: [object Object]
>>> Start push test for object: [object Object]
Returned:0 obj.length:0
Returned:1 obj.length:1
Returned:2 obj.length:2
Returned:3 obj.length:3
Returned:5 obj.length:5
Returned:10 obj.length:10
<<< Stop push test for object: [object Object]
`);
