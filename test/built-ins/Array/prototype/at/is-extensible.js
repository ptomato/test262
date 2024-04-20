// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/Array.prototype.at.case
// - src/public-api-boilerplate/default/is-extensible.template
/*---
description: Array.prototype.at (Is extensible)
esid: sec-built-in-function-objects
features: [Array.prototype.at]
flags: [generated]
info: |
    Unless specified otherwise, the [[Extensible]] internal slot of a built-in
    object initially has the value *true*.

---*/

assert(Object.isExtensible(Array.prototype.at), "Built-in objects must be extensible");
