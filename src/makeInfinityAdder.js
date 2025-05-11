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

    function inner(y) {
      if (typeof y === 'undefined') {
        const result = total;

        total = 0;

        return result;
      }

      total += y;

      return inner;
    }

    return inner;
  }

  return adder;
}

module.exports = makeInfinityAdder;
