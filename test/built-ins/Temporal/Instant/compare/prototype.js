// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/Temporal.Instant.compare.case
// - src/public-api-boilerplate/default/prototype.template
/*---
description: Temporal.Instant.compare (Prototype is %Function.Prototype%)
esid: sec-built-in-function-objects
features: [Temporal]
flags: [generated]
info: |
    The initial value of a built-in function object's [[Prototype]] internal
    slot is %Function.prototype%, unless otherwise specified.

---*/

assert.sameValue(
  Object.getPrototypeOf(Temporal.Instant.compare),
  Function.prototype,
  "The prototype of Temporal.Instant.compare should be %Function.prototype%"
);

assert.sameValue(
  Object.prototype.toString.call(Temporal.Instant.compare),
  "[object Function]",
  "Temporal.Instant.compare should have %Function.prototype%'s toStringTag"
);
