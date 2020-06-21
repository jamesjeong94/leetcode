/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const memo = {};
  const results = [];
  wordDict.sort((a, b) => a.length - b.length);
  const traverse = (cache, substr) => {
    if (substr.length === 0) {
      results.push([...cache].join(' '));
      // results.push([...cache, substr].join(' '));
      return;
    } else {
      for (let i = 0; i <= substr.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
          if (wordDict[j] === substr.slice(0, i)) {
            let dupString = substr.split('');
            dupString.splice(0, i);
            dupString = dupString.join('');
            traverse([...cache, substr.slice(0, i)], dupString);
          }
        }
      }
    }
  };
  traverse([], s);
  return results;
};

// console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']));

console.log(wordBreak('aaaaaaa', ['aaaa', 'aa', 'a']));
