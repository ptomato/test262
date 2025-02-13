// Copyright (C) Microsoft. All rights reserved.
// SPDX-License-Identifier: MIT
/*---
esid: null
description: ChakraCore implementation test Basics/bug_os17542375.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/
// With pageheap:2 we should not hit an AV

function foo() {
   var r = {};
   var b = {};
   var a = {};
   a.$ = r;

   function foo1() {
   }
   function foo2() {
   }
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r
    }, b || (a.jQuery = a.$ = r), r
}

foo();
console.log('pass');

chakraCoreAdaptor.verifyTest();
