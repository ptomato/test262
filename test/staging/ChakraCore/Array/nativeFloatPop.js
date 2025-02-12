// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/nativeFloatPop.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
//Test0: NativeIntArray to NativeFloatArray
var ary =[1,2,3,4];

 function test0(i)
 {
    return ary.pop();
 }

 WScript.Echo("Test0:");
 WScript.Echo(test0(1));
 ary[4]=1.1; //Should Bailout as the type of the array is changed.
 WScript.Echo(test0(1));

 //Test1: NativeFloatArray - popping missing value.
 var ary2 = new Array(10);
 ary2[0] = 1.1;

 function test1()
 {
    return ary2.pop();
 }
 WScript.Echo("Test1:");
 WScript.Echo("length = "+ary2.length);
 WScript.Echo(test1());
 WScript.Echo("length = "+ary2.length);
 WScript.Echo(test1());
 WScript.Echo("length = "+ary2.length);

chakraCoreAdaptor.verifyTest(`Test0:
4
1.1
Test1:
length = 10
undefined
length = 9
undefined
length = 8
`);
