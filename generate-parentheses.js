
const fill = (result, left, right, arr, curi) => {
  if (left < 0 || right < left) return;
  if (left === 0 && right === 0) {
    result.push(arr.join(''));
    return;
  } else {
    arr[curi] = '(';
    fill(result, left - 1, right, arr, curi + 1);

    arr[curi] = ')';
    fill(result, left, right - 1, arr, curi + 1);
  }
};
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  fill(result, n, n, [], 0);
  return result;
};

const test = (n = 3) => {
  console.log(generateParenthesis(n).join('\n'));
};
test(3);