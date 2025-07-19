// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.compare
description: RangeError thrown if relativeTo is a string with the wrong format, before early return
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const invalidStrings = TemporalHelpers.ISO.relativeToStringsInvalid();
invalidStrings.forEach((relativeTo) => {
  const duration = new Temporal.Duration(0, 1);
  assert.throws(RangeError, () => Temporal.Duration.compare(duration, duration, { relativeTo }));
});
