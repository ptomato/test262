// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime
description: Testing combinations of until, add, and negated
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const earlier = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789);
const later = new Temporal.PlainDateTime(2019, 10, 29, 10, 46, 38, 271, 986, 102);
const units = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];

units.forEach((largestUnit) => {
  const diff = earlier.until(later, { largestUnit });
  TemporalHelpers.assertDurationsEqual(
    later.until(earlier, { largestUnit }),
    diff.negated(),
    `(${later}).until(${earlier}) == (${earlier}).until(${later}).negated()`
  );
  assert.sameValue(
    earlier.add(diff).equals(later),
    true,
    "symmetrical with regard to negative durations (1)"
  );
  assert.sameValue(
    later.add(diff.negated()).equals(earlier),
    true,
    "symmetrical with regard to negative durations (2)"
  );
});
