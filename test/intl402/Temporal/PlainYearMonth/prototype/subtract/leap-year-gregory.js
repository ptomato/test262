// Copyright (C) 2025 Igalia, S.L., and the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.subtract
description: Check various basic calculations involving leap years (gregory calendar)
features: [Temporal, Intl.Era-monthcode]
includes: [temporalHelpers.js]
---*/

const calendar = "gregory";
const options = { overflow: "reject" };

// Years

const years1 = new Temporal.Duration(-1);
const years1n = new Temporal.Duration(1);
const years4 = new Temporal.Duration(-4);
const years4n = new Temporal.Duration(4);

const date202002 = Temporal.PlainYearMonth.from({ year: 2020, monthCode: "M02", calendar }, options);

TemporalHelpers.assertPlainYearMonth(
  date202002.subtract(years1, options),
  2021, 2, "M02", "add 1y to leap day",
  "ce", 2021);

TemporalHelpers.assertPlainYearMonth(
  date202002.subtract(years4, options),
  2024, 2, "M02", "add 4y to leap day",
  "ce", 2024);

TemporalHelpers.assertPlainYearMonth(
  date202002.subtract(years1n, options),
  2019, 2, "M02", "subtract 1y from leap day",
  "ce", 2019);

TemporalHelpers.assertPlainYearMonth(
  date202002.subtract(years4n, options),
  2016, 2, "M02", "subtract 4y from leap day",
  "ce", 2016);

// Months

const months1 = new Temporal.Duration(0, -1);
const months1n = new Temporal.Duration(0, 1);
const months5 = new Temporal.Duration(0, -5);
const months11n = new Temporal.Duration(0, 11);
const years1months2 = new Temporal.Duration(-1, -2);
const years1months2n = new Temporal.Duration(1, 2);

const date202001 = Temporal.PlainYearMonth.from({ year: 2020, monthCode: "M01", calendar }, options);
const date202003 = Temporal.PlainYearMonth.from({ year: 2020, monthCode: "M03", calendar }, options);

TemporalHelpers.assertPlainYearMonth(
  date202001.subtract(months1),
  2020, 2, "M02", "add 1mo to Jan 31 constrains to Feb 29 in leap year",
  "ce", 2020);
assert.throws(RangeError, function () {
  date202001.subtract(months1, options);
}, "add 1mo to Jan 31 rejects");

TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 2021, monthCode: "M09", calendar }, options).subtract(months5),
  2022, 2, "M02", "add 5mo with result in the next year constrained to Feb 28",
  "ce", 2022);
TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 2019, monthCode: "M09", calendar }, options).subtract(months5),
  2020, 2, "M02", "add 5mo with result in the next year constrained to Feb 29",
  "ce", 2020);

TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 2021, monthCode: "M12", calendar }, options).subtract(years1months2),
  2023, 2, "M02", "add 1y 2mo with result in the next year constrained to Feb 28",
  "ce", 2023);
TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 2022, monthCode: "M12", calendar }, options).subtract(years1months2),
  2024, 2, "M02", "add 1y 2mo with result in the next year constrained to Feb 29",
  "ce", 2024);

TemporalHelpers.assertPlainYearMonth(
  date202003.subtract(months1n),
  2020, 2, "M02", "subtract 1mo from Mar 31 constrains to Feb 29 in leap year",
  "ce", 2020);
assert.throws(RangeError, function () {
  date202003.subtract(months1n, options);
}, "subtract 1mo from Mar 31 rejects");

TemporalHelpers.assertPlainYearMonth(
  date202001.subtract(months11n),
  2019, 2, "M02", "subtract 11mo with result in the previous year constrained to Feb 28",
  "ce", 2019);
TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 2021, monthCode: "M01", calendar }, options).subtract(months11n),
  2020, 2, "M02", "add 11mo with result in the next year constrained to Feb 29",
  "ce", 2020);

TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 2022, monthCode: "M04", calendar }, options).subtract(years1months2n),
  2021, 2, "M02", "add 1y 2mo with result in the previous year constrained to Feb 28",
  "ce", 2021);
TemporalHelpers.assertPlainYearMonth(
  Temporal.PlainYearMonth.from({ year: 2021, monthCode: "M04", calendar }, options).subtract(years1months2n),
  2020, 2, "M02", "add 1y 2mo with result in the previous year constrained to Feb 29",
  "ce", 2020);
