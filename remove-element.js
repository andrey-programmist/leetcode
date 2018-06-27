/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (!nums || !nums.length) return 0;
    if (nums.length === 1) return nums[0] === val ? 0 : 1;
    let last = nums.length - 1;
    let i = 0;
    while (i <= last) {
        if (nums[i] === val) {
            while (nums[last] === val && last > i) {
                last--;
            }
            if (last === i) break;
            nums[i] = nums[last];
            last--;
        }
        i++;
    }
    return i;
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
    arrs.forEach(arr => console.log(`length:${removeElement(arr, 2)}, ${JSON.stringify(arr)}`));
};
test();