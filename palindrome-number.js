const numbers = [0, 1, 2, 3, 4, 10, 11, 12, 111, 242, 233, 10021, 10501, 4224];

const max32 = 0x7fffffff;
const isPalindrome = x => {
  if (!(x >= 0 && x <= max32)) return false;
  let revNumber = 0;
  let t = 0;
  while (true) {
    revNumber *= 10;
    const pow = Math.pow(10, ~~Math.log10(revNumber));
    revNumber += (~~(x / pow) % 10);
    console.log(`pow ${pow}; rev ${revNumber}`);
    if (x < pow * 10) break;
    for (i = 0; i < 100000000; i++) {
      t += Math.sqrt(i + Math.random());
    }
  }
  return x === revNumber;
};

const isPalindromeOld = x => {
  if (!(x >= 0 && x <= max32)) return false;
  let step = 0;
  while (true) {
    if (x / Math.pow(10, step) >= 10) {
      step += 1;
    }
    else break;
  }
  if (step === 0) return true;
  step += 1;
  for (let i = 1; i < ~~(step / 2) + 1; i++) {
    const left = ((~~(x / Math.pow(10, step - i))) % 10);
    const right = ~~(x % Math.pow(10, i) / Math.pow(10, i - 1));
    if (left !== right) return false;
  }
  return true;
};

// 1234567


console.log(isPalindrome(100));

// numbers.forEach(i => console.log(`${i};${isPalindrome(i)}`));