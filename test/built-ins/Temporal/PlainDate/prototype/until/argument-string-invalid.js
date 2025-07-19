// Copyright (C) 2022 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.until
description: >
  RangeError thrown if an invalid ISO string (or syntactically valid ISO string
  that is not supported) is used as a PlainDate
includes: [temporalHelpers.js]
features: [Temporal, arrow-function]
---*/

const invalidStrings = TemporalHelpers.ISO.plainDateStringsInvalid();
const instance = new Temporal.PlainDate(2000, 5, 2);
for (const arg of invalidStrings) {
  assert.throws(
    RangeError,
    () => instance.until(arg),
    `"${arg}" should not be a valid ISO string for a PlainDate`
  );
}
