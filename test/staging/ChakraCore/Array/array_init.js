// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/array_init.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function DumpArray(a)
{
    var undef_start = -1;
    for (var i = 0; i < a.length; i++)
    {
        if (a[i] == undefined)
        {
            if (undef_start == -1)
            {
                undef_start = i;
            }
        }
        else
        {
            if (undef_start != -1)
            {
                WScript.Echo(undef_start + "-" + (i-1) + " = undefined");
                undef_start = -1;
            }
            WScript.Echo(i + " = " + a[i]);
        }
    }
}
DumpArray([]);
DumpArray([ 0 ]);
DumpArray([ 0, 1, 2, 3, 4, 5, 6 ,7 ,8, 9]);
DumpArray([,,,0,,,1,,,2,,,3,,,4,,,5,,,6,,,7,,,8,,,9,,,]);

var s0 = "";
for (var i = 0; i < 100; i++)
{
    s0 += ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,";
}
DumpArray(eval("[" + s0 + "1]"));
var s1 = "";
for (var i = 0; i < 30; i++)
{
    s1 += s0;
}
DumpArray(eval("[" + s1 + "1]"));
var s2 = "";
for (var i = 0; i < 10; i++)
{
    s2 += s1;
}
DumpArray(eval("[" + s2 + "1]"));


chakraCoreAdaptor.verifyTest(`0 = 0
0 = 0
1 = 1
2 = 2
3 = 3
4 = 4
5 = 5
6 = 6
7 = 7
8 = 8
9 = 9
0-2 = undefined
3 = 0
4-5 = undefined
6 = 1
7-8 = undefined
9 = 2
10-11 = undefined
12 = 3
13-14 = undefined
15 = 4
16-17 = undefined
18 = 5
19-20 = undefined
21 = 6
22-23 = undefined
24 = 7
25-26 = undefined
27 = 8
28-29 = undefined
30 = 9
0-9999 = undefined
10000 = 1
0-299999 = undefined
300000 = 1
0-2999999 = undefined
3000000 = 1
`);
