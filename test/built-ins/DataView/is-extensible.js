// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/DataView.case
// - src/public-api-boilerplate/default/is-extensible.template
/*---
description: DataView (Is extensible)
esid: sec-built-in-function-objects
features: [DataView, ArrayBuffer]
flags: [generated]
info: |
    Unless specified otherwise, the [[Extensible]] internal slot of a built-in
    object initially has the value *true*.

---*/

assert(Object.isExtensible(DataView), "Built-in objects must be extensible");
