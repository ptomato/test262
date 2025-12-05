// Copyright (C) 2025 Igalia, S.L., and the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.add
description: Check various basic calculations involving leap years (roc calendar)
features: [Temporal, Intl.Era-monthcode]
includes: [temporalHelpers.js]
---*/

const calendar = "roc";
const options = { overflow: "reject" };

// Years

const years1 = new Temporal.Duration(1);
const years1n = new Temporal.Duration(-1);
const years4 = new Temporal.Duration(4);
const years4n = new Temporal.Duration(-4);

const date10902 = Temporal.PlainYearMonth.from({ year: 109, monthCode: "M02", calendar }, options);

TemporalHelpers.assertPlainYearMonth(
  date10902.add(years1, options),
  110, 2, "M02", "add 1y to Feb",
  "roc", 110);

TemporalHelpers.assertPlainYearMonth(
  date10902.add(years4, options),
  113, 2, "M02", "add 4y to Feb",
  "roc", 113);

TemporalHelpers.assertPlainYearMonth(
  date10902.add(years1n, options),
  108, 2, "M02", "subtract 1y from Feb",
  "roc", 108);

TemporalHelpers.assertPlainYearMonth(
  date10902.add(years4n, options),
  105, 2, "M02", "subtract 4y from Feb",
  "roc", 105);

// Months

const months1 = new Temporal.Duration(0, 1);
const months1n = new Temporal.Duration(0, -1);
const months5 = new Temporal.Duration(0, 5);
const months11n = new Temporal.Duration(0, -11);
const years1months2 = new Temporal.Duration(1, 2);
const years1months2n = new Temporal.Duration(-1, -2);

const date1090131 = Temporal.PlainYearMonth.from({ year: 109, monthCode: "M01", calendar }, options);
const date1090331 = Temporal.PlainYearMonth.from({ year: 109, monthCode: "M03", calendar }, options);

TemporalHelpers.assertPlainYearMonth(
  date1090131.add(months1),
  109, 2, "M02", "add 1mo to Jan 31 constrains to Feb 29 in leap year",
  "roc", 109);
assert.throws(RangeError, function () {
  date1090131.add(months1, options);
}, "add 1mo to Jan 31 rejects");

TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 110, monthCode: "M09", calendar }, options).add(months5),
  111, 2, "M02", "add 5mo with result in the next year constrained to Feb 28",
  "roc", 111);
TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 108, monthCode: "M09", calendar }, options).add(months5),
  109, 2, "M02", "add 5mo with result in the next year constrained to Feb 29",
  "roc", 109);

TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 110, monthCode: "M12", calendar }, options).add(years1months2),
  112, 2, "M02", "add 1y 2mo with result in the next year constrained to Feb 28",
  "roc", 112);
TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 111, monthCode: "M12", calendar }, options).add(years1months2),
  113, 2, "M02", "add 1y 2mo with result in the next year constrained to Feb 29",
  "roc", 113);

TemporalHelpers.assertPlainYearMonth(
  date1090331.add(months1n),
  109, 2, "M02", "subtract 1mo from Mar 31 constrains to Feb 29 in leap year",
  "roc", 109);
assert.throws(RangeError, function () {
  date1090331.add(months1n, options);
}, "subtract 1mo from Mar 31 rejects");

TemporalHelpers.assertPlainYearMonth(
  date1090131.add(months11n),
  108, 2, "M02", "subtract 11mo with result in the previous year constrained to Feb 28",
  "roc", 108);
TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 110, monthCode: "M01", calendar }, options).add(months11n),
  109, 2, "M02", "add 11mo with result in the next year constrained to Feb 29",
  "roc", 109);

TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 111, monthCode: "M04", calendar }, options).add(years1months2n),
  110, 2, "M02", "add 1y 2mo with result in the previous year constrained to Feb 28",
  "roc", 110);
TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 110, monthCode: "M04", calendar }, options).add(years1months2n),
  109, 2, "M02", "add 1y 2mo with result in the previous year constrained to Feb 29",
  "roc", 109);
