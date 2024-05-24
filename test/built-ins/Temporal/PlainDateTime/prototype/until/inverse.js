// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.until
description: >
  Reversing the order gives the negative duration with default options
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const dt = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789);
const later = new Temporal.PlainDateTime(2016, 3, 3, 18);

TemporalHelpers.assertDurationsEqual(
  dt.until(later),
  later.until(dt).negated(),
  "reversing order gives negative duration with default options"
);
