// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/reverse1.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function write(v) { WScript.Echo(v); }

var n = 5;

function InitObject(obj, len, mult, putUndefined) {
    for (var i=0; i<n; i++) {
        if ((i % mult) == 0)
        {
            obj[i] = i * i + 1;
        }
        else
        {
            if (putUndefined)
            {
                obj[i] = undefined;
            }
        }
    }

    obj[len-1] = "last";
    obj.length = len;

    return obj;
}

function ToString(obj) {
    var str = "";
    for (var i=0; i<obj.length; i++)
        str += obj[i] + ",";

    return str + ":: Length: " + obj.length;
}

function TestReverse(obj) {
    write(">>> Start reverse test for object: " + obj);

    write("Before Orig: " + ToString(obj));

    var res = Array.prototype.reverse.call(obj);

    write("After  Orig: " + ToString(obj));
    write("Result     : " + ToString(res));

    write("<<< Stop reverse test for object: " + obj);
}

function Main(putUndefined) {
    var testList = new Array(new Array(), new Array(), new Array(), new Array(), new Array());
    for (var i=0;i<testList.length;i++) {
        TestReverse(InitObject(testList[i], n + i, i+1, putUndefined));
    }

    testList = new Array(new Object(), new Object(), new Object(), new Object(), new Object());
    for (var i=0;i<testList.length;i++) {
        TestReverse(InitObject(testList[i], n + i, i+1, putUndefined));
    }

    testList = new Array(new Number(10), new Number(10), new Number(10), new Number(10), new Number(10));
    for (var i=0;i<testList.length;i++) {
        TestReverse(InitObject(testList[i], n + i, i, putUndefined));
    }

    testList = new Array(new Boolean(false), new Boolean(false), new Boolean(false), new Boolean(false), new Boolean(false));
    for (var i=0;i<testList.length;i++) {
        TestReverse(InitObject(testList[i], n + i, i, putUndefined));
    }
}

function ProtoCheck() {
    Array.prototype[1]=12;
    var arr=new Array(2)
    write(arr.reverse())

    Object.prototype[1]=10;
    var o=new Object();
    o.length = 2;
    var o1 = Array.prototype.reverse.call(o);

    write(Array.prototype.join.call(o));
    write(Array.prototype.join.call(o1));
}

Main(false);
Main(true);

ProtoCheck();
chakraCoreAdaptor.verifyTest(`>>> Start reverse test for object: 1,2,5,10,last
Before Orig: 1,2,5,10,last,:: Length: 5
After  Orig: last,10,5,2,1,:: Length: 5
Result     : last,10,5,2,1,:: Length: 5
<<< Stop reverse test for object: last,10,5,2,1
>>> Start reverse test for object: 1,,5,,17,last
Before Orig: 1,undefined,5,undefined,17,last,:: Length: 6
After  Orig: last,17,undefined,5,undefined,1,:: Length: 6
Result     : last,17,undefined,5,undefined,1,:: Length: 6
<<< Stop reverse test for object: last,17,,5,,1
>>> Start reverse test for object: 1,,,10,,,last
Before Orig: 1,undefined,undefined,10,undefined,undefined,last,:: Length: 7
After  Orig: last,undefined,undefined,10,undefined,undefined,1,:: Length: 7
Result     : last,undefined,undefined,10,undefined,undefined,1,:: Length: 7
<<< Stop reverse test for object: last,,,10,,,1
>>> Start reverse test for object: 1,,,,17,,,last
Before Orig: 1,undefined,undefined,undefined,17,undefined,undefined,last,:: Length: 8
After  Orig: last,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 8
Result     : last,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 8
<<< Stop reverse test for object: last,,,17,,,,1
>>> Start reverse test for object: 1,,,,,,,,last
Before Orig: 1,undefined,undefined,undefined,undefined,undefined,undefined,undefined,last,:: Length: 9
After  Orig: last,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,:: Length: 9
Result     : last,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,:: Length: 9
<<< Stop reverse test for object: last,,,,,,,,1
>>> Start reverse test for object: [object Object]
Before Orig: 1,2,5,10,last,:: Length: 5
After  Orig: last,10,5,2,1,:: Length: 5
Result     : last,10,5,2,1,:: Length: 5
<<< Stop reverse test for object: [object Object]
>>> Start reverse test for object: [object Object]
Before Orig: 1,undefined,5,undefined,17,last,:: Length: 6
After  Orig: last,17,undefined,5,undefined,1,:: Length: 6
Result     : last,17,undefined,5,undefined,1,:: Length: 6
<<< Stop reverse test for object: [object Object]
>>> Start reverse test for object: [object Object]
Before Orig: 1,undefined,undefined,10,undefined,undefined,last,:: Length: 7
After  Orig: last,undefined,undefined,10,undefined,undefined,1,:: Length: 7
Result     : last,undefined,undefined,10,undefined,undefined,1,:: Length: 7
<<< Stop reverse test for object: [object Object]
>>> Start reverse test for object: [object Object]
Before Orig: 1,undefined,undefined,undefined,17,undefined,undefined,last,:: Length: 8
After  Orig: last,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 8
Result     : last,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 8
<<< Stop reverse test for object: [object Object]
>>> Start reverse test for object: [object Object]
Before Orig: 1,undefined,undefined,undefined,undefined,undefined,undefined,undefined,last,:: Length: 9
After  Orig: last,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,:: Length: 9
Result     : last,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,:: Length: 9
<<< Stop reverse test for object: [object Object]
>>> Start reverse test for object: 10
Before Orig: undefined,undefined,undefined,undefined,last,:: Length: 5
After  Orig: last,undefined,undefined,undefined,undefined,:: Length: 5
Result     : last,undefined,undefined,undefined,undefined,:: Length: 5
<<< Stop reverse test for object: 10
>>> Start reverse test for object: 10
Before Orig: 1,2,5,10,17,last,:: Length: 6
After  Orig: last,17,10,5,2,1,:: Length: 6
Result     : last,17,10,5,2,1,:: Length: 6
<<< Stop reverse test for object: 10
>>> Start reverse test for object: 10
Before Orig: 1,undefined,5,undefined,17,undefined,last,:: Length: 7
After  Orig: last,undefined,17,undefined,5,undefined,1,:: Length: 7
Result     : last,undefined,17,undefined,5,undefined,1,:: Length: 7
<<< Stop reverse test for object: 10
>>> Start reverse test for object: 10
Before Orig: 1,undefined,undefined,10,undefined,undefined,undefined,last,:: Length: 8
After  Orig: last,undefined,undefined,undefined,10,undefined,undefined,1,:: Length: 8
Result     : last,undefined,undefined,undefined,10,undefined,undefined,1,:: Length: 8
<<< Stop reverse test for object: 10
>>> Start reverse test for object: 10
Before Orig: 1,undefined,undefined,undefined,17,undefined,undefined,undefined,last,:: Length: 9
After  Orig: last,undefined,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 9
Result     : last,undefined,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 9
<<< Stop reverse test for object: 10
>>> Start reverse test for object: false
Before Orig: undefined,undefined,undefined,undefined,last,:: Length: 5
After  Orig: last,undefined,undefined,undefined,undefined,:: Length: 5
Result     : last,undefined,undefined,undefined,undefined,:: Length: 5
<<< Stop reverse test for object: false
>>> Start reverse test for object: false
Before Orig: 1,2,5,10,17,last,:: Length: 6
After  Orig: last,17,10,5,2,1,:: Length: 6
Result     : last,17,10,5,2,1,:: Length: 6
<<< Stop reverse test for object: false
>>> Start reverse test for object: false
Before Orig: 1,undefined,5,undefined,17,undefined,last,:: Length: 7
After  Orig: last,undefined,17,undefined,5,undefined,1,:: Length: 7
Result     : last,undefined,17,undefined,5,undefined,1,:: Length: 7
<<< Stop reverse test for object: false
>>> Start reverse test for object: false
Before Orig: 1,undefined,undefined,10,undefined,undefined,undefined,last,:: Length: 8
After  Orig: last,undefined,undefined,undefined,10,undefined,undefined,1,:: Length: 8
Result     : last,undefined,undefined,undefined,10,undefined,undefined,1,:: Length: 8
<<< Stop reverse test for object: false
>>> Start reverse test for object: false
Before Orig: 1,undefined,undefined,undefined,17,undefined,undefined,undefined,last,:: Length: 9
After  Orig: last,undefined,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 9
Result     : last,undefined,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 9
<<< Stop reverse test for object: false
>>> Start reverse test for object: 1,2,5,10,last
Before Orig: 1,2,5,10,last,:: Length: 5
After  Orig: last,10,5,2,1,:: Length: 5
Result     : last,10,5,2,1,:: Length: 5
<<< Stop reverse test for object: last,10,5,2,1
>>> Start reverse test for object: 1,,5,,17,last
Before Orig: 1,undefined,5,undefined,17,last,:: Length: 6
After  Orig: last,17,undefined,5,undefined,1,:: Length: 6
Result     : last,17,undefined,5,undefined,1,:: Length: 6
<<< Stop reverse test for object: last,17,,5,,1
>>> Start reverse test for object: 1,,,10,,,last
Before Orig: 1,undefined,undefined,10,undefined,undefined,last,:: Length: 7
After  Orig: last,undefined,undefined,10,undefined,undefined,1,:: Length: 7
Result     : last,undefined,undefined,10,undefined,undefined,1,:: Length: 7
<<< Stop reverse test for object: last,,,10,,,1
>>> Start reverse test for object: 1,,,,17,,,last
Before Orig: 1,undefined,undefined,undefined,17,undefined,undefined,last,:: Length: 8
After  Orig: last,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 8
Result     : last,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 8
<<< Stop reverse test for object: last,,,17,,,,1
>>> Start reverse test for object: 1,,,,,,,,last
Before Orig: 1,undefined,undefined,undefined,undefined,undefined,undefined,undefined,last,:: Length: 9
After  Orig: last,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,:: Length: 9
Result     : last,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,:: Length: 9
<<< Stop reverse test for object: last,,,,,,,,1
>>> Start reverse test for object: [object Object]
Before Orig: 1,2,5,10,last,:: Length: 5
After  Orig: last,10,5,2,1,:: Length: 5
Result     : last,10,5,2,1,:: Length: 5
<<< Stop reverse test for object: [object Object]
>>> Start reverse test for object: [object Object]
Before Orig: 1,undefined,5,undefined,17,last,:: Length: 6
After  Orig: last,17,undefined,5,undefined,1,:: Length: 6
Result     : last,17,undefined,5,undefined,1,:: Length: 6
<<< Stop reverse test for object: [object Object]
>>> Start reverse test for object: [object Object]
Before Orig: 1,undefined,undefined,10,undefined,undefined,last,:: Length: 7
After  Orig: last,undefined,undefined,10,undefined,undefined,1,:: Length: 7
Result     : last,undefined,undefined,10,undefined,undefined,1,:: Length: 7
<<< Stop reverse test for object: [object Object]
>>> Start reverse test for object: [object Object]
Before Orig: 1,undefined,undefined,undefined,17,undefined,undefined,last,:: Length: 8
After  Orig: last,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 8
Result     : last,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 8
<<< Stop reverse test for object: [object Object]
>>> Start reverse test for object: [object Object]
Before Orig: 1,undefined,undefined,undefined,undefined,undefined,undefined,undefined,last,:: Length: 9
After  Orig: last,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,:: Length: 9
Result     : last,undefined,undefined,undefined,undefined,undefined,undefined,undefined,1,:: Length: 9
<<< Stop reverse test for object: [object Object]
>>> Start reverse test for object: 10
Before Orig: undefined,undefined,undefined,undefined,last,:: Length: 5
After  Orig: last,undefined,undefined,undefined,undefined,:: Length: 5
Result     : last,undefined,undefined,undefined,undefined,:: Length: 5
<<< Stop reverse test for object: 10
>>> Start reverse test for object: 10
Before Orig: 1,2,5,10,17,last,:: Length: 6
After  Orig: last,17,10,5,2,1,:: Length: 6
Result     : last,17,10,5,2,1,:: Length: 6
<<< Stop reverse test for object: 10
>>> Start reverse test for object: 10
Before Orig: 1,undefined,5,undefined,17,undefined,last,:: Length: 7
After  Orig: last,undefined,17,undefined,5,undefined,1,:: Length: 7
Result     : last,undefined,17,undefined,5,undefined,1,:: Length: 7
<<< Stop reverse test for object: 10
>>> Start reverse test for object: 10
Before Orig: 1,undefined,undefined,10,undefined,undefined,undefined,last,:: Length: 8
After  Orig: last,undefined,undefined,undefined,10,undefined,undefined,1,:: Length: 8
Result     : last,undefined,undefined,undefined,10,undefined,undefined,1,:: Length: 8
<<< Stop reverse test for object: 10
>>> Start reverse test for object: 10
Before Orig: 1,undefined,undefined,undefined,17,undefined,undefined,undefined,last,:: Length: 9
After  Orig: last,undefined,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 9
Result     : last,undefined,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 9
<<< Stop reverse test for object: 10
>>> Start reverse test for object: false
Before Orig: undefined,undefined,undefined,undefined,last,:: Length: 5
After  Orig: last,undefined,undefined,undefined,undefined,:: Length: 5
Result     : last,undefined,undefined,undefined,undefined,:: Length: 5
<<< Stop reverse test for object: false
>>> Start reverse test for object: false
Before Orig: 1,2,5,10,17,last,:: Length: 6
After  Orig: last,17,10,5,2,1,:: Length: 6
Result     : last,17,10,5,2,1,:: Length: 6
<<< Stop reverse test for object: false
>>> Start reverse test for object: false
Before Orig: 1,undefined,5,undefined,17,undefined,last,:: Length: 7
After  Orig: last,undefined,17,undefined,5,undefined,1,:: Length: 7
Result     : last,undefined,17,undefined,5,undefined,1,:: Length: 7
<<< Stop reverse test for object: false
>>> Start reverse test for object: false
Before Orig: 1,undefined,undefined,10,undefined,undefined,undefined,last,:: Length: 8
After  Orig: last,undefined,undefined,undefined,10,undefined,undefined,1,:: Length: 8
Result     : last,undefined,undefined,undefined,10,undefined,undefined,1,:: Length: 8
<<< Stop reverse test for object: false
>>> Start reverse test for object: false
Before Orig: 1,undefined,undefined,undefined,17,undefined,undefined,undefined,last,:: Length: 9
After  Orig: last,undefined,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 9
Result     : last,undefined,undefined,undefined,17,undefined,undefined,undefined,1,:: Length: 9
<<< Stop reverse test for object: false
12,12
10,10
10,10
`);
