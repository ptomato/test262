// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/equal.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function write(v) { WScript.Echo(v + ""); }

function foo() {}

var all = [ 0, 10.2, 1, -10, "1",
            "hello", undefined, true,false, new Array(10),
            null, Number.MAX_VALUE, Number.POSITIVE_INFINITY
          ];
    
for (var i=0; i<all.length; ++i) {
    for (var j=0; j<all.length; ++j) {
        write("a[" + i + "] == a[" + j + "] = " + (all[i] == all[j]));
    }
}
chakraCoreAdaptor.verifyTest(`a[0] == a[0] = true
a[0] == a[1] = false
a[0] == a[2] = false
a[0] == a[3] = false
a[0] == a[4] = false
a[0] == a[5] = false
a[0] == a[6] = false
a[0] == a[7] = false
a[0] == a[8] = true
a[0] == a[9] = false
a[0] == a[10] = false
a[0] == a[11] = false
a[0] == a[12] = false
a[1] == a[0] = false
a[1] == a[1] = true
a[1] == a[2] = false
a[1] == a[3] = false
a[1] == a[4] = false
a[1] == a[5] = false
a[1] == a[6] = false
a[1] == a[7] = false
a[1] == a[8] = false
a[1] == a[9] = false
a[1] == a[10] = false
a[1] == a[11] = false
a[1] == a[12] = false
a[2] == a[0] = false
a[2] == a[1] = false
a[2] == a[2] = true
a[2] == a[3] = false
a[2] == a[4] = true
a[2] == a[5] = false
a[2] == a[6] = false
a[2] == a[7] = true
a[2] == a[8] = false
a[2] == a[9] = false
a[2] == a[10] = false
a[2] == a[11] = false
a[2] == a[12] = false
a[3] == a[0] = false
a[3] == a[1] = false
a[3] == a[2] = false
a[3] == a[3] = true
a[3] == a[4] = false
a[3] == a[5] = false
a[3] == a[6] = false
a[3] == a[7] = false
a[3] == a[8] = false
a[3] == a[9] = false
a[3] == a[10] = false
a[3] == a[11] = false
a[3] == a[12] = false
a[4] == a[0] = false
a[4] == a[1] = false
a[4] == a[2] = true
a[4] == a[3] = false
a[4] == a[4] = true
a[4] == a[5] = false
a[4] == a[6] = false
a[4] == a[7] = true
a[4] == a[8] = false
a[4] == a[9] = false
a[4] == a[10] = false
a[4] == a[11] = false
a[4] == a[12] = false
a[5] == a[0] = false
a[5] == a[1] = false
a[5] == a[2] = false
a[5] == a[3] = false
a[5] == a[4] = false
a[5] == a[5] = true
a[5] == a[6] = false
a[5] == a[7] = false
a[5] == a[8] = false
a[5] == a[9] = false
a[5] == a[10] = false
a[5] == a[11] = false
a[5] == a[12] = false
a[6] == a[0] = false
a[6] == a[1] = false
a[6] == a[2] = false
a[6] == a[3] = false
a[6] == a[4] = false
a[6] == a[5] = false
a[6] == a[6] = true
a[6] == a[7] = false
a[6] == a[8] = false
a[6] == a[9] = false
a[6] == a[10] = true
a[6] == a[11] = false
a[6] == a[12] = false
a[7] == a[0] = false
a[7] == a[1] = false
a[7] == a[2] = true
a[7] == a[3] = false
a[7] == a[4] = true
a[7] == a[5] = false
a[7] == a[6] = false
a[7] == a[7] = true
a[7] == a[8] = false
a[7] == a[9] = false
a[7] == a[10] = false
a[7] == a[11] = false
a[7] == a[12] = false
a[8] == a[0] = true
a[8] == a[1] = false
a[8] == a[2] = false
a[8] == a[3] = false
a[8] == a[4] = false
a[8] == a[5] = false
a[8] == a[6] = false
a[8] == a[7] = false
a[8] == a[8] = true
a[8] == a[9] = false
a[8] == a[10] = false
a[8] == a[11] = false
a[8] == a[12] = false
a[9] == a[0] = false
a[9] == a[1] = false
a[9] == a[2] = false
a[9] == a[3] = false
a[9] == a[4] = false
a[9] == a[5] = false
a[9] == a[6] = false
a[9] == a[7] = false
a[9] == a[8] = false
a[9] == a[9] = true
a[9] == a[10] = false
a[9] == a[11] = false
a[9] == a[12] = false
a[10] == a[0] = false
a[10] == a[1] = false
a[10] == a[2] = false
a[10] == a[3] = false
a[10] == a[4] = false
a[10] == a[5] = false
a[10] == a[6] = true
a[10] == a[7] = false
a[10] == a[8] = false
a[10] == a[9] = false
a[10] == a[10] = true
a[10] == a[11] = false
a[10] == a[12] = false
a[11] == a[0] = false
a[11] == a[1] = false
a[11] == a[2] = false
a[11] == a[3] = false
a[11] == a[4] = false
a[11] == a[5] = false
a[11] == a[6] = false
a[11] == a[7] = false
a[11] == a[8] = false
a[11] == a[9] = false
a[11] == a[10] = false
a[11] == a[11] = true
a[11] == a[12] = false
a[12] == a[0] = false
a[12] == a[1] = false
a[12] == a[2] = false
a[12] == a[3] = false
a[12] == a[4] = false
a[12] == a[5] = false
a[12] == a[6] = false
a[12] == a[7] = false
a[12] == a[8] = false
a[12] == a[9] = false
a[12] == a[10] = false
a[12] == a[11] = false
a[12] == a[12] = true
`);
