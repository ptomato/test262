// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/StringField.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var o=new Object();
o.x=5;
o.y="why";
WScript.Echo(o["x"]);
var s="y";
WScript.Echo(o[s]);
o["y"]="yes";
WScript.Echo(o.y);
for (field in o) {
   WScript.Echo(o[field]);
}


chakraCoreAdaptor.verifyTest(`5
why
yes
5
yes
`);
