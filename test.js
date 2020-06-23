let zeroMover = (array) => {
  let count = 0;
  let i = 0;
  while (i < array.length) {
    console.log(i);
    if (array[i] === 0) {
      array.splice(i, 1);
      count++;
    } else {
      i++;
    }
  }
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      array.push(0);
    }
  }
  return array;
};

console.log(zeroMover([1, 0, 2, 5, 0, 3, 1]));
