// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/DataView.case
// - src/public-api-boilerplate/callable/is-function.template
/*---
description: DataView (Is a function)
esid: sec-typeof-operator-runtime-semantics-evaluation
features: [DataView, ArrayBuffer]
flags: [generated]
info: |
    13. If _val_ has a [[Call]] internal slot, return *"function"*.

---*/

assert.sameValue(
  typeof DataView,
  "function",
  "DataView is a function"
);
