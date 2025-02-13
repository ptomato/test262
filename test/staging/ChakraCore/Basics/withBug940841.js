// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/withBug940841.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
var i = 0;
while (i < 3) 
{
  (function () 
  {
    with ({}) 
    {
      __proto__;
    }
  })();
  i++;
}
WScript.Echo("PASS");

chakraCoreAdaptor.verifyTest();
