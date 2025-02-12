// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/pop1.js
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

function TestPop(obj) {
    write(">>> Start pop test for object: " + obj);
    for (var i=0; i<n+2; i++) {
        var x = Array.prototype.pop.call(obj);
        write(i + " iteration. Poped:" + x + " obj.length:" + obj.length);
    }
    write("<<< Stop pop test for object: " + obj);
}

var testList = new Array(new Array() , new Object());
for (var i=0;i<testList.length;i++) {
    TestPop(InitObject(testList[i]));
}
chakraCoreAdaptor.verifyTest(`>>> Start pop test for object: 1,2,5,10,17
0 iteration. Poped:17 obj.length:4
1 iteration. Poped:10 obj.length:3
2 iteration. Poped:5 obj.length:2
3 iteration. Poped:2 obj.length:1
4 iteration. Poped:1 obj.length:0
5 iteration. Poped:undefined obj.length:0
6 iteration. Poped:undefined obj.length:0
<<< Stop pop test for object: 
>>> Start pop test for object: [object Object]
0 iteration. Poped:17 obj.length:4
1 iteration. Poped:10 obj.length:3
2 iteration. Poped:5 obj.length:2
3 iteration. Poped:2 obj.length:1
4 iteration. Poped:1 obj.length:0
5 iteration. Poped:undefined obj.length:0
6 iteration. Poped:undefined obj.length:0
<<< Stop pop test for object: [object Object]
`);
