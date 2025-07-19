// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.compare
description: Reject string argument if it cannot be parsed
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const invalidStrings = TemporalHelpers.ISO.plainDateTimeStringsInvalid();
const other = new Temporal.PlainDateTime(2025, 6, 14, 16, 7);

invalidStrings.forEach((arg) => {
  assert.throws(
    RangeError,
    () => Temporal.PlainDateTime.compare(arg, other),
    `date-time string "${arg}" should be invalid (first argument)`
  );
  assert.throws(
    RangeError,
    () => Temporal.PlainDateTime.compare(other, arg),
    `date-time string "${arg}" should be invalid (second argument)`
  );
});
