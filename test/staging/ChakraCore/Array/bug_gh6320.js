/*---
esid: null
description: ChakraCore implementation test Array/bug_gh6320.js
includes: [chakracore/adaptor.js]
flags: [noStrict]
---*/function f(array) {
  Array.prototype.push.call(array, 1);
  ' ' + array;
}

f([0]);
f([0]);
f(2.3023e-320);

print('PASS');

chakraCoreAdaptor.verifyTest();
