// Copyright (C) 2022 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.compare
description: >
  RangeError thrown if an invalid RFC 9557 string is used as a PlainDate
includes: [temporalHelpers.js]
features: [Temporal, arrow-function]
---*/

const invalidStrings = TemporalHelpers.ISO.plainDateStringsInvalid();
const other = new Temporal.PlainDate(2020, 1, 1);
for (const arg of invalidStrings) {
  assert.throws(
    RangeError,
    () => Temporal.PlainDate.compare(arg, other),
    `"${arg}" should not be a valid ISO string for a PlainDate (first argument)`
  );
  assert.throws(
    RangeError,
    () => Temporal.PlainDate.compare(other, arg),
    `"${arg}" should not be a valid ISO string for a PlainDate (second argument)`
  );
}
