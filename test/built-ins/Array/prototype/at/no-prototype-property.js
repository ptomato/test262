// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/Array.prototype.at.case
// - src/public-api-boilerplate/nonconstructor/no-prototype-property.template
/*---
description: Array.prototype.at (Does not have a prototype property)
esid: sec-built-in-function-objects
features: [Array.prototype.at]
flags: [generated]
info: |
    Built-in function objects that are not constructors do not have a
    *"prototype"* property unless otherwise specified in the description of a
    particular function.

---*/

assert(!Array.prototype.at.hasOwnProperty("prototype"), "Array.prototype.at does not have a prototype property");
