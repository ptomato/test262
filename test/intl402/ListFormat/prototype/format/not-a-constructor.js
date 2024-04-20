// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/Intl.ListFormat.prototype.format.case
// - src/public-api-boilerplate/nonconstructor/not-a-constructor.template
/*---
description: Intl.ListFormat.prototype.format (Does not implement [[Construct]], is not new-able)
esid: sec-built-in-function-objects
features: [Intl.ListFormat]
flags: [generated]
includes: [isConstructor.js]
info: |
    Built-in function objects that are not identified as constructors do not
    implement the [[Construct]] internal method unless otherwise specified in
    the description of a particular function.

---*/

assert.throws(TypeError, function () {
    new Intl.ListFormat.prototype.format([]);
}, "Applying the new operator to Intl.ListFormat.prototype.format throws a TypeError");

if (typeof Reflect.construct !== "undefined") {
    assert(!isConstructor(Intl.ListFormat.prototype.format), "Intl.ListFormat.prototype.format is not a constructor");
}
