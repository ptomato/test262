// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/protoLookup_native.js
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
  Array.prototype[i] = 43.35 + i * 5.3;
}

var arr= [32, 4.5, 6.3];
var newarr=arr.splice(0,5)

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
  Array.prototype[i] = 32 + i * 5;
}

var arr= [ 43, 54, 32];
var newarr=arr.splice(0,5)
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
  Array.prototype[i] = 3343.232 * i;
}

var arr= [23.5, 32.4];
var newarr=arr.splice(0,8, 5.43, 23.4)
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
    Array.prototype[k]= 324 * i;
}
var arr=new Array(10);
var newarr=arr.splice(3,5)
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
    Array.prototype[k]=k + 23.4;
}
var arr= [23.4, 34 ];
var newarr=arr.splice(6,4)

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

Object.prototype[0]=32;
Array.prototype[9]= 232;
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
arr1[2147483647]=100.32;
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
  Array.prototype[i] = 23 * i * 0.5;
}

var arr = [];
for(var i = 1; i< 20; i = i+3)
{
  arr[i] = i + 0.5;
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

0
32,4.5,6.3
3

Test case 2

0
43,54,32
3

Test case 3
5.43,23.4
2
23.5,32.4
2

Test case 4
3240,3240,3240,3240,3240
5
3240,3240,3240,3240,3240
5

Test case 5
P0,P1,P2,d1,d2,d3,P8,P9
8
P3,P4,P5,P6,P7
5

Test case 6
23.4,34
2

0

Test case 7
expando:0=string
expando:8=lastelement
expando:length=9
expando:shift=function shift() { [native code] }

Test case 8
32
undefined
123,,,,,,,,232
9

Test case 9
,,,,,,,100.32
8
2147483649

Test case 10
1.5,11.5,O3,4.5,46,O6,7.5,80.5,O9,10.5,115,O12,13.5,149.5,O15,16.5,184,O18,19.5
19
10,1.5,11.5,O3,4.5,46,O6,7.5,80.5,O9,10.5,115,O12,13.5,149.5,O15,16.5,184,O18,19.5
20
10,1.5,11.5,O3,4.5,a,b,7.5,80.5,O9,10.5,115,O12,13.5,149.5,O15,16.5,184,O18,19.5
20
46,O6
2
10,1.5,11.5,O3,4.5,a,b,a,b,13.5,149.5,O15,16.5,184,O18,19.5
16
7.5,80.5,O9,10.5,115,O12
6
10,1.5,11.5,O3,4.5,a,b,a,b,13.5,a,b,c,e,f,16.5,184,O18,19.5
19
149.5,O15
2

Test case 11
O0,11.5,10,O3,46
5
11.5,10,O3,46
4
20,11.5,10,O3,46
11.5,10,O3,46
10,40,11.5,10,O3,46
50,10,40,11.5,10,O3,46
10,40,11.5,10,O3,46
O0,11.5,10,O3,46
5
46,O3,10,11.5,O0
5
O0,11.5,2,3,4
5
4,3,2,11.5,O0
5
1,2,3,O0,11.5,10
`);
