// Copyright (C) 2018 Bloomberg LP. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal-zoneddatetime-objects
description: math order of operations and options
features: [Temporal]
---*/

var breakoutUnits = (op, zdt, d, options) => zdt[op]({ years: d.years }, options)[op]({ months: d.months }, options)[op]({ weeks: d.weeks }, options)[op]({ days: d.days }, options)[op]({
  hours: d.hours,
  minutes: d.minutes,
  seconds: d.seconds,
  milliseconds: d.milliseconds,
  microseconds: d.microseconds,
  nanoseconds: d.nanoseconds
}, options);

// order of operations: add / none
var zdt = Temporal.ZonedDateTime.from("2020-01-31T00:00-08:00[-08:00]");
var d = Temporal.Duration.from({
  months: 1,
  days: 1
});
var options = undefined;
var result = zdt.add(d, options);
assert.sameValue(result.toString(), "2020-03-01T00:00:00-08:00[-08:00]");
assert.sameValue(breakoutUnits("add", zdt, d, options).toString(), result.toString());

// order of operations: add / constrain
var zdt = Temporal.ZonedDateTime.from("2020-01-31T00:00-08:00[-08:00]");
var d = Temporal.Duration.from({
  months: 1,
  days: 1
});
var options = { overflow: "constrain" };
var result = zdt.add(d, options);
assert.sameValue(result.toString(), "2020-03-01T00:00:00-08:00[-08:00]");
assert.sameValue(breakoutUnits("add", zdt, d, options).toString(), result.toString());

// order of operations: add / reject
var zdt = Temporal.ZonedDateTime.from("2020-01-31T00:00-08:00[-08:00]");
var d = Temporal.Duration.from({
  months: 1,
  days: 1
});
var options = { overflow: "reject" };
assert.throws(RangeError, () => zdt.add(d, options));
