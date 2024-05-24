// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.timezone.prototype.tojson
description: toJSON() calls toString()
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const actual = [];

const timeZone = new Temporal.TimeZone("UTC");
TemporalHelpers.observeProperty(actual, timeZone, Symbol.toPrimitive, undefined);
TemporalHelpers.observeProperty(actual, timeZone, "id", "Etc/Bogus");
TemporalHelpers.observeProperty(actual, timeZone, "toString", function () {
  actual.push("call timeZone.toString");
  return "Etc/TAI";
});

const result = timeZone.toJSON();
assert.sameValue(result, "Etc/TAI", "toJSON gets the value from toString");
assert.compareArray(actual, [
  "get toString",
  "call timeZone.toString",
], "should call toString");
