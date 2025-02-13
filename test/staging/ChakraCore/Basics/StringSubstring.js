// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/StringSubstring.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function test(x, s, e)
{
    var result = x.substring(s, e);
    WScript.Echo('"' + result + '", length:', result.length);
}

//
// Test regular strings
//

var left = "abcdefghijklmnopqrstuvwxyz";
test(left, 1, 10);
test(left, 0, 5);
test(left, 15, 25);

//
// Test concatenated strings
//

var right = "1234567890";
var c = left + right;

WScript.Echo("Left-only");
test(c, 1, 10);
test(c, 0, 5);
test(c, 15, 25);
WScript.Echo();

WScript.Echo("Right-only");
var o = left.length;
test(c, o + 1, o + 5);
test(c, o, o + 10);
WScript.Echo();

WScript.Echo("Split");
test(c, o - 2, o + 3);
test(c, 0, c.length);
WScript.Echo();

//
// Test parameter validation
//

WScript.Echo("Split");
test(left, 3);  // To end of string
test(left, 0, 0);
test(left, 0, 1);

chakraCoreAdaptor.verifyTest(`"bcdefghij", length: 9
"abcde", length: 5
"pqrstuvwxy", length: 10
Left-only
"bcdefghij", length: 9
"abcde", length: 5
"pqrstuvwxy", length: 10

Right-only
"2345", length: 4
"1234567890", length: 10

Split
"yz123", length: 5
"abcdefghijklmnopqrstuvwxyz1234567890", length: 36

Split
"defghijklmnopqrstuvwxyz", length: 23
"", length: 0
"a", length: 1
`);
