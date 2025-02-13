// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/cross_site_accessor_main.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
var e = WScript.LoadScriptFile("cross_site_accessor_child.js", "samethread");

var child_obj = e.obj;

child_obj.x = function foo1() {
    return "pass";
}

child_obj.y = function foo2(data) {
    WScript.Echo(data);
}

WScript.Echo(child_obj.xval);
child_obj.xval = "pass"
chakraCoreAdaptor.verifyTest();
