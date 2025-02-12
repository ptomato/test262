// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/array_lastindexof.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
var x = [1, 2, 2, 4, 5, +0, -0, NaN, 0, true, true , false]

for(i=-3; i < 15;i++)
{
   WScript.Echo(x.lastIndexOf(i));
   for(j=-3; j< 15;j++)
   {
    WScript.Echo(x.lastIndexOf(x[i],j));
    WScript.Echo(x.lastIndexOf(i,j));
   }
}

var b = function(){};
b.prototype = Array.prototype;

var y = new b();

var z = new Object();
var a = new Object();

y[0] = "abc";
y[1] = "def";
y[2] = "efg";
y[3] = true;
y[4] = true;
y[5] = false;
y[6] = a;
y[7] = a;
y[8] = null;

y.length = 10;

WScript.Echo(y.lastIndexOf("abc"));
WScript.Echo(y.lastIndexOf("abc", 3));
WScript.Echo(y.lastIndexOf("abc", 2));
WScript.Echo(y.lastIndexOf("abc", -2));

WScript.Echo(y.lastIndexOf("efg"));
WScript.Echo(y.lastIndexOf("efg", 6));
WScript.Echo(y.lastIndexOf("efg", 1));
WScript.Echo(y.lastIndexOf("efg", -3));

WScript.Echo(y.lastIndexOf("xyg"));
WScript.Echo(y.lastIndexOf("esg", 2));
WScript.Echo(y.lastIndexOf("eag", 2));
WScript.Echo(y.lastIndexOf("", -2));

WScript.Echo(y.lastIndexOf(true));
WScript.Echo(y.lastIndexOf(false));
WScript.Echo(y.lastIndexOf(new Boolean(true)));

WScript.Echo(y.lastIndexOf(a , 6));
WScript.Echo(y.lastIndexOf(a , 1));
WScript.Echo(y.lastIndexOf(a ));
WScript.Echo(y.lastIndexOf(b));

WScript.Echo(y.lastIndexOf(null));

WScript.Echo(y.lastIndexOf());

//implicit calls
var a ;
var arr = [10];
Object.defineProperty(Array.prototype, "4", {configurable : true, get: function(){a = true; return 30;}});
a = false;
arr.length = 6;
var f = arr.lastIndexOf(30);
WScript.Echo(a);

chakraCoreAdaptor.verifyTest(`-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
8
0
8
0
8
0
8
0
-1
0
-1
0
-1
0
-1
0
-1
0
5
0
6
0
6
0
8
0
8
0
8
0
8
0
8
0
8
0
8
0
2
0
2
0
2
0
-1
0
1
0
2
0
2
0
2
0
2
0
2
0
2
0
2
0
2
0
2
0
2
0
2
0
2
0
2
0
2
2
2
2
2
2
2
-1
-1
1
1
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
2
-1
3
-1
3
-1
3
-1
-1
-1
-1
-1
-1
-1
3
-1
3
-1
3
-1
3
-1
3
-1
3
-1
3
-1
3
-1
3
-1
3
-1
3
-1
3
-1
3
4
3
4
3
4
3
-1
-1
-1
-1
-1
-1
-1
3
4
3
4
3
4
3
4
3
4
3
4
3
4
3
4
3
4
3
4
3
4
3
4
8
4
8
4
8
4
-1
-1
-1
-1
-1
-1
-1
-1
-1
4
5
4
6
4
6
4
8
4
8
4
8
4
8
4
8
4
8
4
8
4
-1
8
-1
8
-1
8
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
5
-1
6
-1
6
-1
8
-1
8
-1
8
-1
8
-1
8
-1
8
-1
8
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
8
-1
8
-1
8
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
5
-1
6
-1
6
-1
8
-1
8
-1
8
-1
8
-1
8
-1
8
-1
8
-1
-1
9
-1
10
-1
10
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
9
-1
10
-1
10
-1
10
-1
10
-1
10
-1
-1
9
-1
10
-1
10
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
9
-1
10
-1
10
-1
10
-1
10
-1
10
-1
-1
-1
-1
-1
-1
11
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
11
-1
11
-1
11
-1
11
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
-1
0
0
0
0
2
2
-1
2
-1
-1
-1
-1
4
5
-1
6
-1
7
-1
8
-1
true
`);
