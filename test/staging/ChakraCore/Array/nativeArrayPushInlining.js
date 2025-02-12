// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/nativeArrayPushInlining.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var GiantPrintArray = [];

function test0()
{
   GiantPrintArray.push(3.2);
   GiantPrintArray.push(true);
}

test0();
//Profiled as NativeFloatArray
test0();

for(var i =0;i<GiantPrintArray.length;i++){
 WScript.Echo(GiantPrintArray[i]);
 };

function test1()
{
    var ary;
    GiantPrintArray.push(2);
    GiantPrintArray.push(ary);
}

test1();
//Profiled as NativeIntArray
test1();

for(var i =0;i<GiantPrintArray.length;i++){
 WScript.Echo(GiantPrintArray[i]);
 };

function test2(a)
{
    GiantPrintArray.push(a);
}

var GiantPrintArray = [1.1];
test2(1);
//Profiled as NativeFloatArray
var ary;
test2(ary);

for(var i =0;i<GiantPrintArray.length;i++){
 WScript.Echo(GiantPrintArray[i]);
 };

function test3()
{
        GiantPrintArray = [{}];
        GiantPrintArray.push(7);

}

test3();
//Profiled as Var Array
test3();

for(var i =0;i<GiantPrintArray.length;i++){
 WScript.Echo(GiantPrintArray[i]);
 };

chakraCoreAdaptor.verifyTest(`3.2
true
3.2
true
3.2
true
3.2
true
2
undefined
2
undefined
1.1
1
undefined
[object Object]
7
`);
