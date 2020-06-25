/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  const result = new Set();
  const obj = {};
  for (let i = 0; i < transactions.length; i++) {
    let [name, time, amount, city] = transactions[i].split(',');
    if (!obj.hasOwnProperty(name)) {
      obj[name] = [
        {
          time,
          city,
          amount,
          dup: false,
          meta: transactions[i],
        },
      ];
    } else {
      obj[name].push({
        time,
        city,
        amount,
        dup: false,
        meta: transactions[i],
      });
    }
  }
  let names = Object.keys(obj);
  for (let name of names) {
    for (let i = 0; i < obj[name].length; i++) {
      if (Number(obj[name][i].amount) > 1000) {
        result.add(obj[name][i].meta);
      }
      for (let j = i + 1; j < obj[name].length; j++) {
        if (
          Math.abs(obj[name][i].time - obj[name][j].time) <= 60 &&
          obj[name][i].city !== obj[name][j].city
        ) {
          result.add(obj[name][i].meta);
          result.add(obj[name][j].meta);
        }
      }
    }
  }
  // console.log(obj);
  return [...result];
};

console.log(
  invalidTransactions([
    'bob,627,1973,amsterdam',
    'alex,387,885,bangkok',
    'alex,355,1029,barcelona',
    'alex,587,402,bangkok',
    'chalicefy,973,830,barcelona',
    'alex,932,86,bangkok',
    'bob,188,989,amsterdam',
  ])
);
