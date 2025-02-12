// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/bug_gh5667.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
// Test a bug fix for the xplat qsort implementation
// https://github.com/Microsoft/ChakraCore/issues/5667
function testArray(size)
{
    // Create an array with all the same value
    const arr = new Array(size);
    arr.fill(100);

    // Change the second to last value to be smaller
    arr[arr.length - 2] = 99;

    // Sort the array
    arr.sort((a, b) => a - b);

    // Verify that the array is sorted
    for (let i = 1; i < arr.length; ++i)
    {
        if (arr[i] < arr[i - 1])
        {
            // Sort has not completed correctly
            throw new Error (`Array is not sorted correctly at index '${i}'`);
        }
    }
}

testArray(512);
testArray(513);

WScript.Echo("PASS");

chakraCoreAdaptor.verifyTest();
