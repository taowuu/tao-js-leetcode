/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
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
// @lc code=end

