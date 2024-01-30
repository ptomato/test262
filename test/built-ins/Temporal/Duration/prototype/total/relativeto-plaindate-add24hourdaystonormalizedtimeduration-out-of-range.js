// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.compare
description: RangeError thrown if adding the duration to the relativeTo date would result in anout-of-range date-time
features: [Temporal]
includes: [temporalHelpers.js]
---*/

let duration = Temporal.Duration.from({
  years: 1,
  seconds: 2**53 - 1,
});
let relativeTo = new Temporal.PlainDate(2000, 1, 1);

assert.throws(TypeError, () => duration.total({ relativeTo, unit: "days" }));
