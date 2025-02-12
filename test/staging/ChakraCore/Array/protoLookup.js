// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/protoLookup.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
function write(args)
{
 WScript.Echo(args);
}

write("Test case 1");

for(var i =0;i<10;i++)
{
  Array.prototype[i] = "p"+i;
}

var arr=new Array(10);
var newarr=arr.splice(0,5,"d1","d2","d3","d4")

write(arr);
write(arr.length);
write(newarr);
write(newarr.length);

for(var i =0;i<10;i++)
{
  delete Array.prototype[i];
}

write("");
write("Test case 2");

for(var i =0;i<10;i++)
{
  Array.prototype[i] = "p"+i;
}

var arr=new Array(10);
var newarr=arr.splice(0,5,"d1","d2","d3","d4","d5","d6","d7")
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);

for(var i =0;i<10;i++)
{
  delete Array.prototype[i];
}

write("");
write("Test case 3");

for(var i =0;i<10;i++)
{
  i++;
  Array.prototype[i] = "p"+i;
}

var arr=new Array(10);
var newarr=arr.splice(0,5,"d1","d2","d3","d4","d5","d6","d7")
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);

for(var i =0;i<10;i++)
{
  delete Array.prototype[i];
}

write("");
write("Test case 4");
for(var k=0;k<10;k++)
{
    Array.prototype[k]="P"+k;
}
var arr=new Array(10);
var newarr=arr.splice(3,5,"d1","d2","d3")
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
for(var k=0;k<10;k++)
{
    delete Array.prototype[k];
}

write("");
write("Test case 5");
for(var k=0;k<10;k++)
{
    Array.prototype[k]="P"+k;
}
var arr=new Array(10);
var newarr=arr.splice(3,5,"d1","d2","d3")
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);

for(var k=0;k<10;k++)
{
    delete Array.prototype[k];
}

write("");
write("Test case 6");
for(var k=0;k<10;k++)
{
    Array.prototype[k]="P"+k;
}
var arr=new Array(10);
var newarr=arr.splice(3,1,"d1","d2","d3")

write(arr);
write(arr.length);
write(newarr);
write(newarr.length);

for(var k=0;k<10;k++)
{
    delete Array.prototype[k];
}

write("");
write("Test case 7");

Object.prototype.shift=Array.prototype.shift;
var obj =new Object();
obj.length=10;
obj[0]=101;
obj[1]="string";
obj[9]="lastelement";

var res=obj.shift()

for(var i in obj)
    write("expando:" + i +"=" +obj[i]);

delete Object.prototype.shift;

write("");
write("Test case 8");

Object.prototype[0]="hello world";
Array.prototype[9]="p9";
var arr =new Array(10);
arr[1]=123;

var res=arr.shift();
write(res);
write(res.length);
write(arr);
write(arr.length);

delete Object.prototype[0];
delete Array.prototype[9];

write("");
write("Test case 9");
var arr1 = new Array(2147483649);
arr1[2147483647]=100;
var newarr=arr1.slice(2147483640,2147483648);
write(newarr);
write(newarr.length);
write(arr1.length);

write("");
write("Test case 10");
for(var i = 0; i< 20; i = i+3)
{
  Object.prototype[i] = "O"+i;
}

for(var i = 1; i< 20; i = i+3)
{
  Array.prototype[i] = "a"+i;
}

var arr = [];
for(var i = 1; i< 20; i = i+3)
{
  arr[i] = i;
}

arr.shift();
write(arr);
write(arr.length);
arr.unshift(10);
write(arr);
write(arr.length);
var newarr = arr.splice(5,2,"a","b");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
newarr = arr.splice(7,6,"a","b");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
newarr = arr.splice(10,2,"a","b","c","e","f");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);

write("");
write("Test case 11");
Object.prototype[2] = 10;
var arr = new Array(5);
write(arr);
write(arr.length);
arr.shift();
write(arr);
write(arr.length);
arr.unshift("10","20");
arr.shift();
write(arr);
arr.shift();
write(arr);
arr.unshift(10,40);
write(arr);
arr.unshift(50);
write(arr);
arr.shift(50);
write(arr);

var arr = new Array(5);
write(arr);
write(arr.length);
arr.reverse();
write(arr);
write(arr.length);

var arr = new Array(5);
arr[2] = 2;
arr[3] = 3;
arr[4] = 4;
write(arr);
write(arr.length);
arr.reverse();
write(arr);
write(arr.length);

var a = [1, 2, 3];
var b = [];
b.length = 3;
write(a.concat(b));

chakraCoreAdaptor.verifyTest(`Test case 1
d1,d2,d3,d4,p5,p6,p7,p8,p9
9
p0,p1,p2,p3,p4
5

Test case 2
d1,d2,d3,d4,d5,d6,d7,p5,p6,p7,p8,p9
12
p0,p1,p2,p3,p4
5

Test case 3
d1,d2,d3,d4,d5,d6,d7,p5,,p7,,p9
12
,p1,,p3,
5

Test case 4
P0,P1,P2,d1,d2,d3,P8,P9
8
P3,P4,P5,P6,P7
5

Test case 5
P0,P1,P2,d1,d2,d3,P8,P9
8
P3,P4,P5,P6,P7
5

Test case 6
P0,P1,P2,d1,d2,d3,P4,P5,P6,P7,P8,P9
12
P3
1

Test case 7
expando:0=string
expando:8=lastelement
expando:length=9
expando:shift=function shift() { [native code] }

Test case 8
hello world
11
123,,,,,,,,p9
9

Test case 9
,,,,,,,100
8
2147483649

Test case 10
1,a1,O3,4,a4,O6,7,a7,O9,10,a10,O12,13,a13,O15,16,a16,O18,19
19
10,1,a1,O3,4,a4,O6,7,a7,O9,10,a10,O12,13,a13,O15,16,a16,O18,19
20
10,1,a1,O3,4,a,b,7,a7,O9,10,a10,O12,13,a13,O15,16,a16,O18,19
20
a4,O6
2
10,1,a1,O3,4,a,b,a,b,13,a13,O15,16,a16,O18,19
16
7,a7,O9,10,a10,O12
6
10,1,a1,O3,4,a,b,a,b,13,a,b,c,e,f,16,a16,O18,19
19
a13,O15
2

Test case 11
O0,a1,10,O3,a4
5
a1,10,O3,a4
4
20,a1,10,O3,a4
a1,10,O3,a4
10,40,a1,10,O3,a4
50,10,40,a1,10,O3,a4
10,40,a1,10,O3,a4
O0,a1,10,O3,a4
5
a4,O3,10,a1,O0
5
O0,a1,2,3,4
5
4,3,2,a1,O0
5
1,2,3,O0,a1,10
`);
