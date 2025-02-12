// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/array_splice3.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var echo = WScript.Echo;

// no argument
var a = [0, 1, 2, 3, 4];
echo("splice no arg:", a, "||", a.splice());

// "start" only
var starts = [-2, 0, 2, 8];
for (var i = 0; i < starts.length; i++) {
    var a = [0, 1, 2, 3, 4];
    var start = starts[i];
    echo("splice at " + start + ":", a, "||", a.splice(start));
}

chakraCoreAdaptor.verifyTest(`splice no arg: 0,1,2,3,4 || 
splice at -2: 0,1,2 || 3,4
splice at 0:  || 0,1,2,3,4
splice at 2: 0,1 || 2,3,4
splice at 8: 0,1,2,3,4 || 
`);
