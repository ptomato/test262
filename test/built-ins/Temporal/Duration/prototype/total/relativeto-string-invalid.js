// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.total
description: RangeError thrown if relativeTo is a string with the wrong format
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const invalidStrings = TemporalHelpers.ISO.relativeToStringsInvalid();
invalidStrings.forEach((relativeTo) => {
  const duration = new Temporal.Duration(0, 0, 0, 31);
  assert.throws(RangeError, () => duration.total({ unit: "months", relativeTo }));
});
