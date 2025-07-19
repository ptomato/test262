// Copyright (C) 2022 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.until
description: >
  RangeError thrown if an invalid RFC 9557 string is used as an Instant
features: [Temporal, arrow-function]
---*/

const invalidStrings = TemporalHelpers.ISO.instantStringsInvalid();

const instance = new Temporal.Instant(0n);
for (const arg of invalidStrings) {
  assert.throws(
    RangeError,
    () => instance.until(arg),
    `"${arg}" should not be a valid ISO string for an Instant`
  );
}
