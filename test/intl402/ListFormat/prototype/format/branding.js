// This file was procedurally generated from the following sources:
// - src/public-api-boilerplate/Intl.ListFormat.prototype.format.case
// - src/public-api-boilerplate/method/branding.template
/*---
description: Intl.ListFormat.prototype.format (Throw a TypeError if the receiver is invalid)
esid: sec-Intl.ListFormat.prototype.format
features: [Intl.ListFormat]
flags: [generated]
---*/

const format = Intl.ListFormat.prototype.format;

assert.throws(TypeError, function () {
    format.apply(undefined, [[]]);
}, "receiver is undefined");

assert.throws(TypeError, function () {
    format.apply(null, [[]]);
}, "receiver is null");

assert.throws(TypeError, function () {
    format.apply(true, [[]]);
}, "receiver is a boolean");

assert.throws(TypeError, function () {
    format.apply("", [[]]);
}, "receiver is a string");

assert.throws(TypeError, function () {
    format.apply(1, [[]]);
}, "receiver is a number");

assert.throws(TypeError, function () {
    format.apply({}, [[]]);
}, "receiver is a plain object");

assert.throws(TypeError, function () {
    format.apply(Intl.ListFormat, [[]]);
}, "receiver is Intl.ListFormat");

assert.throws(TypeError, function () {
    format.apply(Intl.ListFormat.prototype, [[]]);
}, "receiver is Intl.ListFormat.prototype");

if (typeof Symbol !== "undefined") {
    assert.throws(TypeError, function () {
        format.apply(Symbol(), [[]]);
    }, "receiver is a symbol");
}
if (typeof BigInt !== "undefined") {
    assert.throws(TypeError, function () {
        format.apply(BigInt(1), [[]]);
    }, "receiver is a bigint");
}
