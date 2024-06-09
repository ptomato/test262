// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.valueof
description: Same function object as other Temporal valueOf methods
features: [Temporal]
---*/

const valueOf = Temporal.Duration.prototype.valueOf;
assert.sameValue(valueOf, Temporal.Instant.prototype.valueOf);
assert.sameValue(valueOf, Temporal.PlainDate.prototype.valueOf);
assert.sameValue(valueOf, Temporal.PlainDateTime.prototype.valueOf);
assert.sameValue(valueOf, Temporal.PlainMonthDay.prototype.valueOf);
assert.sameValue(valueOf, Temporal.PlainTime.prototype.valueOf);
assert.sameValue(valueOf, Temporal.PlainYearMonth.prototype.valueOf);
assert.sameValue(valueOf, Temporal.ZonedDateTime.prototype.valueOf);
