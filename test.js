module.exports = {
  literalTest: (actual, expected) => {
    if (actual === expected) {
      return console.log('Passed');
    }
    return console.log('Failed');
  },
  arrayTest: (actual, expected) => {
    for (let i = 0; i < expected.length; i++) {
      if (actual[i] !== expected[i]) {
        return console.log('Failed');
      }
    }
    return console.log('Passed');
  },
  objectTest: (actual, expected) => {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      return console.log('Passed');
    }
    return console.log('Failed');
  },
};
