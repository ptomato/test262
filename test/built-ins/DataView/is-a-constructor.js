// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/DataView.case
// - src/public-api-boilerplate/constructor/is-a-constructor.template
/*---
description: DataView (Implements [[Construct]])
esid: sec-built-in-function-objects
features: [DataView, ArrayBuffer]
flags: [generated]
includes: [isConstructor.js]
info: |
    A built-in function object has a [[Construct]] internal method if and only
    if it is described as a “constructor”, or some algorithm in this
    specification explicitly sets its [[Construct]] internal method. Such a
    [[Construct]] internal method must conform to the definition in 10.3.2.

---*/

void new DataView(new ArrayBuffer(16));

if (typeof Reflect.construct !== "undefined") {
    assert(isConstructor(DataView), "DataView is a constructor");
}
