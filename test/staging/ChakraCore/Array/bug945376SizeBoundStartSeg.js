// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Array/bug945376SizeBoundStartSeg.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
//reduced switches: -ForceArrayBTree
function test0() {
  var c = 4294967295;
  var ary = Array();
  var func2 = function () {
    ary.pop();
    ary.pop();
    return 4;
  };

  function func3() {
    --c
    ary.reverse();
    return func2()+ 1;
  }

  ary[c] = 1;
  ary.splice(0, 0, func2(), func3());
  ary.push(2);
  ary[c] = 0;
  ary.splice(1, 0, func2(), func3());
  ary.push(3);
}
test0();
print("PASS");
chakraCoreAdaptor.verifyTest();
