// Copyright (C) 2022 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.from
description: >
  RangeError thrown if an invalid RFC 9557 string is used as a PlainDate
includes: [temporalHelpers.js]
features: [Temporal, arrow-function]
---*/

const invalidStrings = TemporalHelpers.ISO.plainDateStringsInvalid();
for (const arg of invalidStrings) {
  assert.throws(
    RangeError,
    () => Temporal.PlainDate.from(arg),
    `"${arg}" should not be a valid ISO string for a PlainDate`
  );
}
