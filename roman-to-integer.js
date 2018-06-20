const dMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

const romanToInt = (s) => {
  const result = s.split('').reduceRight((acc, v) => {
    const last = dMap[v];
    return {
      sum: acc.sum + last * (acc.last <= last ? 1 : -1),
      last,
    };
  }, { sum: 0, last: 0 });
  return result.sum;
};

const test = () => {
  const arr = ['MCMXCIV', 'LVIII', 'IX', 'IV', 'III'];
  arr.forEach(i => console.log(`roman: ${i};int: ${romanToInt(i)}`));
};
test();