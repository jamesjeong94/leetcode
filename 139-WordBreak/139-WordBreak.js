const wordBreak = (s, wordDict) => {
  if (!wordDict) return false;
  let dp = new Array(s.length + 1);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[i]) break;
      if (dp[j] && wordDict.indexOf(s.substring(i, j)) >= 0) {
        console.log(j, i);
        dp[i] = true;
        break;
      }
    }
  }
  return Boolean(dp[s.length]);
};

console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
