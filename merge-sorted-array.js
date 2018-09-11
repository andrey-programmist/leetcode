/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (n === 0) return;
    while (m !== 0 || n !== 0) {
        if (n === 0 || (m > 0 && (nums1[m - 1] > nums2[n - 1]))) {
            nums1[m + n - 1] = nums1[m - 1];
            m--;
        } else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }
    }
};

const test = () => {
    const arr1 = [1, 2, 3, 0, 0, 0];
    merge(arr1, 3, [2, 5, 6], 3);
    console.log(arr1);
    // const arr1 = [0];
    // merge(arr1, 0, [1], 1);
    // console.log(arr1);
};
test();