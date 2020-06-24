/**
 * @param {number} num
 * @return {string}
 */

const segmentIdentifer = ['', 'Thousand', 'Million', 'Billion'];
const uniqueTens = {
  '10': 'Ten',
  '11': 'Eleven',
  '12': 'Twelve',
  '13': 'Thirteen',
  '14': 'Fourteen',
  '15': 'Fifteen',
  '16': 'Sixteen',
  '17': 'Seventeen',
  '18': 'Eighteen',
  '19': 'Nineteen',
};

const tens = {
  '00': '',
  '20': 'Twenty',
  '30': 'Thirty',
  '40': 'Forty',
  '50': 'Fifty',
  '60': 'Sixty',
  '70': 'Seventy',
  '80': 'Eighty',
  '90': 'Ninety',
};

const singleNums = [
  '',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
];

var numberToWords = function (num) {
  if (num === 0) {
    return 'Zero';
  }
  let result = [];
  let string = num.toString();
  const numOfSegments = Math.floor((string.length - 1) / 3) + 1;
  let segments = [];
  let segment = [];
  for (let i = string.length - 1; i >= 0; i--) {
    segment.unshift(string[i]);
    if (segment.length === 3 || i === 0) {
      segments.unshift(segment);
      segment = [];
    }
  }
  const convertInner = (segment) => {
    let str = [];
    let segmentStr = segment.join('');
    while (segmentStr.length > 0) {
      if (segmentStr.length === 3) {
        if (segmentStr[0] !== '0') {
          str.push(`${singleNums[segmentStr[0]]} Hundred`);
        }
        segmentStr = segmentStr.slice(1);
      } else if (segmentStr.length === 2) {
        if (uniqueTens.hasOwnProperty(segmentStr)) {
          str.push(`${uniqueTens[segmentStr]}`);
          segmentStr = '';
        } else {
          str.push(`${tens[segmentStr[0] + '0']}`);
          segmentStr = segmentStr.slice(1);
        }
      } else {
        str.push(singleNums[segmentStr]);
        segmentStr = '';
      }
    }
    str = str.filter((el) => {
      return el !== '';
    });
    return str.join(' ').trim();
  };
  for (let i = 0; i < numOfSegments; i++) {
    let suffix =
      segments[i].join('') !== '000'
        ? `${segmentIdentifer[numOfSegments - i - 1]}`
        : '';
    result.push(`${convertInner(segments[i])}`);
    result.push(suffix);
  }
  return result
    .filter((el) => {
      return el !== '';
    })
    .join(' ')
    .trim();
};

console.log(numberToWords(1010101));
