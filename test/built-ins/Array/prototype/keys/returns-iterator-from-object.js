// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.keys
description: >
  Creates an iterator from a custom object.
info: |
  22.1.3.13 Array.prototype.keys ( )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
  3. Return CreateArrayIterator(O, "key").
features: [Symbol.iterator]
includes: [wellKnownIntrinsicObjects.js]
---*/

var obj = {
  length: 2
};
var iter = Array.prototype.keys.call(obj);

assert.sameValue(
  Object.getPrototypeOf(iter),
  getWellKnownIntrinsicObject('%ArrayIteratorPrototype%'),
  'The prototype of [].keys() is %ArrayIteratorPrototype%'
);
