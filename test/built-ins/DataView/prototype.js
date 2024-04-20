// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/DataView.case
// - src/public-api-boilerplate/callable/prototype.template
/*---
description: DataView (Prototype is %Function.Prototype%)
esid: sec-built-in-function-objects
features: [DataView, ArrayBuffer]
flags: [generated]
info: |
    The initial value of a built-in function object's [[Prototype]] internal
    slot is %Function.prototype%, unless otherwise specified.

---*/

assert.sameValue(
  Object.getPrototypeOf(DataView),
  Function.prototype,
  "The prototype of DataView should be %Function.prototype%"
);

assert.sameValue(
  Object.prototype.toString.call(DataView),
  "[object Function]",
  "DataView should have %Function.prototype%'s toStringTag"
);
