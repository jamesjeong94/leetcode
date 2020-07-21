function find_numbers(digit, start, end) {
  let results = [];
  let digitStr = digit.toString();
  for (let i = start; i <= end; i++) {
    let string = i.toString();
    if (string.indexOf(digitStr) >= 0) {
      results.push(i);
    }
  }
  return results.join(' ');
}

console.log(find_numbers(15, 1, 13));
