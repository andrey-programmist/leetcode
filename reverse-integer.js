const inputs = [123, -123, 120, 0];

const max32 = Math.pow(2, 31) - 1; // 0x7fffffff
const min32 = ~max32; // -0x80000000
const reverse = (x) => {
    const splitted = x.toString().split('');
    const result = [];
    for (let i = splitted.length - 1; i > 0; i--) {
        result.push(splitted[i]);
    }
    if (splitted[0] === '-') result.unshift(splitted[0]);
    else result.push(splitted[0]);
    const intRes = parseInt(result.join(''));
    if (intRes >= min32 && intRes <= max32) return intRes;
    return 0;
};

console.log(inputs.map(i => reverse(i)).join());