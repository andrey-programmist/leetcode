/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (!nums || !nums.length) return 0;
    if (nums.length === 1) return nums[0];
    for (let i = 2; i < nums.length; i++) {
        step(nums, i, sums);
    }
    return sums[sums.length - 1];
};

const step = (nums, i, sums) => {
    sums.push(Math.max(nums[i] + sums[i - 2], sums[i - 1]));
};

const test = () => {
    const arr = [
        [7, 5],
        [1, 2, 3, 1],
        [2, 7, 9, 3, 1]
    ];
    arr.forEach(i => console.log(rob(i)));
};
test();