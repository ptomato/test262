// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/With-defer-block-scope.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
let h = function f(a0 = (function () {
    a0;
    a1;
    a2;
    a3;
    a4;
    a5;
    a6;
    a7 = 0x99999; // oob write

    with ({});
})(), a1, a2, a3, a4, a5, a6, a7) {
    function g() {
        f;
    }
};

for (let i = 0; i < 0x10000; i++) {
h();
}

WScript.Echo('pass');

chakraCoreAdaptor.verifyTest();
