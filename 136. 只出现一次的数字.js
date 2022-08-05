/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/single-number/
 */

var singleNumber = function(nums) {
    let res = 0
    // n ^ 0 == n
    // n ^ 新数 == n + 新数
    // n ^ 旧数 == n - 旧数
    nums.forEach(n => {
        res ^= n
    })
    return res
};