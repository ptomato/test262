// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/Array.prototype.at.case
// - src/public-api-boilerplate/default/is-function.template
/*---
description: Array.prototype.at (Is a function)
esid: sec-typeof-operator-runtime-semantics-evaluation
features: [Array.prototype.at]
flags: [generated]
info: |
    13. If _val_ has a [[Call]] internal slot, return *"function"*.

---*/

assert.sameValue(
  typeof Array.prototype.at,
  "function",
  "Array.prototype.at is a function"
);
