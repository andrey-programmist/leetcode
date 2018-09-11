const digToLet = {
  '2': [...'abc'],
  '3': [...'def'],
  '4': [...'ghi'],
  '5': [...'jkl'],
  '6': [...'mno'],
  '7': [...'pqrs'],
  '8': [...'tuv'],
  '9': [...'wxyz'],
}
const printCounters = (counters) => {
  return counters.map(i => digToLet[i.let][i.cur]).join('');
};
const initCounter = (digits) => {
  const result = digits.reduce((acc, v, i) => {
    const letterLen = digToLet[v].length;
    const obj = {
      let: v,
      cur: 0,
      len: letterLen,
    };
    obj.inc = function () {
      this.cur = (this.cur + 1) % this.len;
      if (this.cur % this.len === 0) {
        acc.counters[(i + 1) % digits.length].inc();
      }
    }.bind(obj);
    acc.iterations *= letterLen;
    acc.counters[i] = obj;
    return acc;
  }, {
      iterations: 1,
      counters: new Array(digits.length),
    });

  return result;
};
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === '') return [];
  const generator = initCounter([...digits]);
  const result = new Array(generator.iterations);
  for (let i = 0; i < generator.iterations; i++) {
    result[i] = printCounters(generator.counters);
    generator.counters[0].inc();
  }
  return result;
};

const test = (d = '') => {
  console.log(letterCombinations(d).join('\n'));
};
test();