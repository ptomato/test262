// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.equals
description: Reject string argument if it cannot be parsed
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const invalidStrings = TemporalHelpers.ISO.plainDateTimeStringsInvalid();
const instance = new Temporal.PlainDateTime(2025, 6, 14, 16, 10);

invalidStrings.forEach((s) => {
  assert.throws(
    RangeError,
    () => instance.equals(s),
    `date-time string "${s}" should be invalid`
  );
});
