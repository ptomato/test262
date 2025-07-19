// Copyright (C) 2022 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.compare
description: >
  RangeError thrown if an invalid RFC 9557 string is used as an Instant
includes: [temporalHelpers.js]
features: [Temporal, arrow-function]
---*/

const invalidStrings = TemporalHelpers.ISO.instantStringsInvalid();

const epoch = new Temporal.Instant(0n);
for (const arg of invalidStrings) {
  assert.throws(
    RangeError,
    () => Temporal.Instant.compare(arg, epoch),
    `"${arg}" should not be a valid ISO string for an Instant (first argument)`
  );
  assert.throws(
    RangeError,
    () => Temporal.Instant.compare(epoch, arg),
    `"${arg}" should not be a valid ISO string for an Instant (second argument)`
  );
}
