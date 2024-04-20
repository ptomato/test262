// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/Array.prototype.at.case
// - src/public-api-boilerplate/nonconstructor/not-a-constructor.template
/*---
description: Array.prototype.at (Does not implement [[Construct]], is not new-able)
esid: sec-built-in-function-objects
features: [Array.prototype.at]
flags: [generated]
includes: [isConstructor.js]
info: |
    Built-in function objects that are not identified as constructors do not
    implement the [[Construct]] internal method unless otherwise specified in
    the description of a particular function.

---*/

assert.throws(TypeError, function () {
    new Array.prototype.at();
}, "Applying the new operator to Array.prototype.at throws a TypeError");

if (typeof Reflect.construct !== "undefined") {
    assert(!isConstructor(Array.prototype.at), "Array.prototype.at is not a constructor");
}
