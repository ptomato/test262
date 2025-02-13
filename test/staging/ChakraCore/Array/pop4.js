// Copyright (C) Microsoft. All rights reserved.
// Copyright (c) 2022 ChakraCore Project Contributors. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/pop4.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
const array = [1, 2, 3];

const testRuns = 10;
let counter = 0;

let proto = [];
Object.defineProperty(proto, 3, {
    get: function () {
        counter++;
        return 42;
    }
});
array.__proto__ = proto;

function hotFunction() {
    // Discard return value
    array.pop();
}

for (let i = 0; i < testRuns; i++) {
    array.length = 4;
    hotFunction();
}

if (counter < testRuns) {
    throw new Error(`Expected ${testRuns} calls to getter, got ${counter}`);
}
print("pass");

chakraCoreAdaptor.verifyTest();
