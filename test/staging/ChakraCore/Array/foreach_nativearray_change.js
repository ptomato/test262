// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/foreach_nativearray_change.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var IntArr1 = new Array();
prop1 = 1;
IntArr1[0] = 1;
IntArr1[1] = 1;
IntArr1[3] = 2147483647;
IntArr1[2] = 1;
IntArr1 = IntArr1.concat(prop1);
// Native Int Array change to Native Float Array in the middle of forEach
IntArr1.forEach(function (element, index) {
    WScript.Echo(IntArr1[index]++);
    WScript.Echo(element);
});


chakraCoreAdaptor.verifyTest(`1
1
1
1
1
1
2147483647
2147483647
1
1
`);
