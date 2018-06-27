/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!haystack.length) return !needle.length ? 0 : -1;
    if (!needle.length) return 0;
    let equals;
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack[i] !== needle[0]) continue;

        equals = true;
        for (let j = 1; j < needle.length; j++) {
            if (needle[j] !== haystack[i + j]) {
                equals = false;
                break;
            }
        }
        if (equals) return i;
    }
    return -1;
};

const test = () => {
    const arr = [
        ['', 'll'],
        ['hello', ''],
        ['hello', 'll'],
        ['abracadabra', 'abra'],
        ['abracadabra', 'dabra'],
        ['abracadabra', 'dabrac'],
    ];
    arr.forEach(i => console.log(`${strStr(i[0], i[1])}`));
};
test();