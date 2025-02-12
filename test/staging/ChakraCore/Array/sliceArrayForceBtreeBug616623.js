// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/sliceArrayForceBtreeBug616623.js
includes: [chakracore/adaptor.js, chakracore/UnitTestFramework.js]
flags: [noStrict]
---*/
WScript.Arguments.push("summary");
assert = unitTestFrameworkAssert;
if (this.WScript && this.WScript.LoadScriptFile) { // Check for running in ch
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

function test0()
{

    var IntArr1 = new Array();
    IntArr1[9] = 9;
    for (var v1 = 10; v1 >= 0; v1--) {
        Object.prototype[v1] = "d";
    }
    Object.defineProperty(Array.prototype, '4', {value: "four"});
    return IntArr1.slice().toString();
}
var tests = [
   {
       name: "slice interpreted baseline test",
       body: function ()
       {
        var a = test0(); //interpreted
        var b = test0();
        assert.areEqual(a,b,"b should equal the results of the interpreted run");
        assert.areEqual("d,d,d,d,four,d,d,d,d,9",b,"redundant test to make sure both a and b did not change");
       }
    }
    ];
testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });

chakraCoreAdaptor.verifyTest();
