const isValid = function (s) {
    if (s === '') return true;
    const mp = {
        '(': 1,
        '{': 1,
        '[': 1,
        ']': '[',
        ')': '(',
        '}': '{'
    };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (mp[s[i]] === 1) {
            stack.push(s[i]);
        } else {
            const ti = stack.pop();
            if (mp[s[i]] !== ti) return false;
        }
    }
    return stack.length === 0;
};

const test = () => {
    const cases = [
        "()",
        "()[]{}",
        "(]",
        "([)]",
        "{[]}",
    ];
    cases.forEach(i => console.log(`${i} -> ${isValid(i)}`));
};
test();