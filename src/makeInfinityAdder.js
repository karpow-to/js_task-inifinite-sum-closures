'use strict';

function makeInfinityAdder() {
  let total = 0;

  function adder(x) {
    if (typeof x === 'undefined') {
      const result = total;

      total = 0;

      return result;
    }

    total += x;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
