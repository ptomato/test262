// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/array_splice4.js
includes: [chakracore/adaptor.js, compareArray.js]
flags: [noStrict]
---*/
// BLUE#5602: User Mode Write AV starting at Js::SparseArraySegment::EnsureSizeInBound+0x000000000000001a (Hash=0x3c06064b.0x23355e69)
var echo=WScript.Echo

function func2()
{}

// from bug BLUE 5602
function func()
{
    e="div".match(func2());
echo("e = " + e + " ; e.length = " + e.length);
    e.length=58;
echo("e = " + e + " ; e.length = " + e.length);
    e.splice(1);//es.splice(1,17); is OK too
echo("e = " + e + " ; e.length = " + e.length);
}

// from bug BLUE 5602
function func_test2()
{
    e="div".match(func2());
echo("e = " + e + " ; e.length = " + e.length);
    e.length=58;
echo("e = " + e + " ; e.length = " + e.length);
    e.splice(1,17);
echo("e = " + e + " ; e.length = " + e.length);
}

function start()
{
  echo ("start- func()");
  func();
  echo ("start- func_test2()");
  func_test2();
  echo ("start- done");
}

start();

chakraCoreAdaptor.verifyTest(`start- func()
e =  ; e.length = 1
e = ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, ; e.length = 58
e =  ; e.length = 1
start- func_test2()
e =  ; e.length = 1
e = ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, ; e.length = 58
e = ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, ; e.length = 41
start- done
`);
