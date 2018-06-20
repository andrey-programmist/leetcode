const longestCommonPrefix = (strs) => {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const len = Math.min(prefix.length, strs[i].length);
    for (let j = 0; j < len; j++) {
      if (strs[i][j] !== prefix[j]) {
        prefix = prefix.slice(0, j);
        break;
      }
    }
    if (len < prefix.length) {
      prefix = prefix.slice(0, len);
    }
  }
  return prefix;
};
const test = () => {
  const strs = ['qq', 'q', 'qqq'];
  console.log(longestCommonPrefix(strs));
};
test();