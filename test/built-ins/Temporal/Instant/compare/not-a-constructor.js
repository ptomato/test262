// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/Temporal.Instant.compare.case
// - src/public-api-boilerplate/nonconstructor/not-a-constructor.template
/*---
description: Temporal.Instant.compare (Does not implement [[Construct]], is not new-able)
esid: sec-built-in-function-objects
features: [Temporal]
flags: [generated]
includes: [isConstructor.js]
info: |
    Built-in function objects that are not identified as constructors do not
    implement the [[Construct]] internal method unless otherwise specified in
    the description of a particular function.

---*/

assert.throws(TypeError, function () {
    new Temporal.Instant.compare();
}, "Applying the new operator to Temporal.Instant.compare throws a TypeError");

if (typeof Reflect.construct !== "undefined") {
    assert(!isConstructor(Temporal.Instant.compare), "Temporal.Instant.compare is not a constructor");
}
