/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    if (!nums || !nums.length) return 0;
    let curPos = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[curPos - 1]) {
            if (curPos !== i) {
                nums[curPos] = nums[i];
            }
            curPos++;
        }
    }
    return curPos;
};

const test = () => {
    var arrs = [
        [1],
        [1, 1, 1, 2, 2, 2, 2, 3],
        [1, 1, 1, 2, 2, 3, 3, 3],
        [1, 2, 3, 4, 5, 5, 5],
        [],
        [1, 2, 3, 4, 5]
    ];
    arrs.forEach(arr => console.log(`length:${removeDuplicates(arr)}, ${JSON.stringify(arr)}`));
};
test();