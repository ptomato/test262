// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/Temporal.Instant.compare.case
// - src/public-api-boilerplate/default/name.template
/*---
description: Temporal.Instant.compare (Value and descriptor of function's name property)
esid: sec-built-in-function-objects
features: [Temporal]
flags: [generated]
includes: [propertyHelper.js]
info: |
    Every built-in function object, including constructors, has a *"name"*
    property whose value is a String. Unless otherwise specified, this value is
    the name that is given to the function in this specification. Functions that
    are identified as anonymous functions use the empty String as the value of
    the *"name"* property. For functions that are specified as properties of
    objects, the name value is the property name string used to access the
    function. Functions that are specified as get or set accessor functions of
    built-in properties have *"get"* or *"set"* (respectively) passed to the
    prefix parameter when calling CreateBuiltinFunction.

    The value of the *"name"* property is explicitly specified for each built-in
    function whose property key is a Symbol value. If such an explicitly
    specified value starts with the prefix *"get "* or *"set "* and the function
    for which it is specified is a get or set accessor function of a built-in
    property, the value without the prefix is passed to the name parameter, and
    the value *"get"* or *"set"* (respectively) is passed to the prefix
    parameter when calling CreateBuiltinFunction.

    Unless otherwise specified, the *"name"* property of a built-in function
    object has the attributes { [[Writable]]: *false*, [[Enumerable]]: *false*,
    [[Configurable]]: *true* }.

---*/

verifyProperty(Temporal.Instant.compare, "name", {
  value: "compare",
  writable: false,
  enumerable: false,
  configurable: true
});
