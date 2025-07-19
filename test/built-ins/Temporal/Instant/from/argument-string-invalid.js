// Copyright (C) 2022 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.from
description: >
  RangeError thrown if an invalid RFC 9557 string is used as an Instant
includes: [temporalHelpers.js]
features: [Temporal, arrow-function]
---*/

const invalidStrings = TemporalHelpers.ISO.instantStringsInvalid();

for (const arg of invalidStrings) {
  assert.throws(
    RangeError,
    () => Temporal.Instant.from(arg),
    `"${arg}" should not be a valid ISO string for an Instant`
  );
}
