// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/Array.prototype.at.case
// - src/public-api-boilerplate/default/prototype.template
/*---
description: Array.prototype.at (Prototype is %Function.Prototype%)
esid: sec-built-in-function-objects
features: [Array.prototype.at]
flags: [generated]
info: |
    The initial value of a built-in function object's [[Prototype]] internal
    slot is %Function.prototype%, unless otherwise specified.

---*/

assert.sameValue(
  Object.getPrototypeOf(Array.prototype.at),
  Function.prototype,
  "The prototype of Array.prototype.at should be %Function.prototype%"
);

assert.sameValue(
  Object.prototype.toString.call(Array.prototype.at),
  "[object Function]",
  "Array.prototype.at should have %Function.prototype%'s toStringTag"
);
