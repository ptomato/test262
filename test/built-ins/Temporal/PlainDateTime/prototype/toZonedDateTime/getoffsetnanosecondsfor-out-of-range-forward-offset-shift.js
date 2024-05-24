// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.tozoneddatetime
description: >
  UTC offset shift returned by adjacent invocations of getOffsetNanosecondsFor
  in DisambiguatePossibleInstants cannot be greater than 24 hours.
features: [Temporal]
info: |
  DisambiguatePossibleInstants:
  18. If abs(_nanoseconds_) > nsPerDay, throw a *RangeError* exception.
---*/

class ShiftLonger24Hour extends Temporal.TimeZone {
  id = 'TestTimeZone';
  _shiftEpochNs = 12n * 3600n * 1_000_000_000n; // 1970-01-01T12:00Z

  constructor() {
    super('UTC');
  }

  getOffsetNanosecondsFor(instant) {
    if (instant.epochNanoseconds < this._shiftEpochNs) return -12 * 3600e9;
    return 12 * 3600e9 + 1;
  }

  getPossibleInstantsFor(plainDateTime) {
    const [utcInstant] = super.getPossibleInstantsFor(plainDateTime);
    const { year, month, day } = plainDateTime;

    if (year < 1970) return [utcInstant.add({ hours: -12 })];
    if (year === 1970 && month === 1 && day === 1) return [];
    return [utcInstant.add({ hours: 12, nanoseconds: 1 })];
  }
}

const timeZone = new ShiftLonger24Hour();

const instance = new Temporal.PlainDateTime(1970, 1, 1, 12);
assert.throws(RangeError, () => instance.toZonedDateTime(timeZone), "RangeError should be thrown");
