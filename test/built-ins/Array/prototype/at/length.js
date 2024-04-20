// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/Array.prototype.at.case
// - src/public-api-boilerplate/default/length.template
/*---
description: Array.prototype.at (Value and descriptor of function's length property)
esid: sec-built-in-function-objects
features: [Array.prototype.at]
flags: [generated]
includes: [propertyHelper.js]
info: |
    Every built-in function object, including constructors, has a *"length"*
    property whose value is a non-negative integral Number. Unless otherwise
    specified, this value is the number of required parameters shown in the
    subclause heading for the function description. Optional parameters and rest
    parameters are not included in the parameter count.

    Unless otherwise specified, the *"length"* property of a built-in function
    object has the attributes { [[Writable]]: *false*, [[Enumerable]]: *false*,
    [[Configurable]]: *true* }.

---*/

verifyProperty(Array.prototype.at, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
