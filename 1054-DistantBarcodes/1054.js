/**
 * @param {number[]} barcodes
 * @return {number[]}
 */

//Input: [1,1,1,2,2,2]
//Output: [2,1,2,1,2,1]

//Make sure that no adjacent barcodes are equal
//Organize values by # of occurrences
//Push in the value with the most number of occurences that isnt equal to the previous

//How do we keep track of the top most frequent numbers (object and array)
//May need to sort per transaction

var rearrangeBarcodes = function (barcodes) {
  const occur = {};
  for (let val of barcodes) {
    if (occur.hasOwnProperty(val)) {
      occur[val]++;
    } else {
      occur[val] = 1;
    }
  }
  let options = Object.keys(occur);
  options.sort((a, b) => {
    return occur[a] - occur[b];
  });
  console.log(options);
  let index = 1;
  for (let value of options) {
    let occurences = occur[value];
    for (let i = 0; i < occurences; i++) {
      if (index >= barcodes.length) {
        index = 0;
      }
      barcodes[index] = value;
      index += 2;
    }
  }
  return barcodes;
};

console.log(rearrangeBarcodes([1, 1, 1, 1, 2, 2, 2, 3, 3]));
