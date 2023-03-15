// This file was procedurally generated from the following sources:
// - src/regexp-modifiers/other-code-point-zwnbsp.case
// - src/regexp-modifiers/flags-syntax-error/arithmetic-modifiers-constructed-reversed.template
/*---
description: It is a Syntax Error if the source text matched by RegularExpressionFlags contains any code point other than i, m, or s, or if it contains the same code point more than once. (arithmetic regular expression flags)
esid: sec-patterns-static-semantics-early-errors
features: [regexp-modifiers]
flags: [generated]
info: |
    Atom :: ( ? RegularExpressionFlags - RegularExpressionFlags : Disjunction )
    ...

---*/

assert.throws(SyntaxError, function () {
  RegExp("(?s﻿-:a)", "");
}, 'RegExp("(?s﻿-:a)", ""): ');
