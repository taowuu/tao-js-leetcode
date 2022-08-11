/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.cn/problems/jump-game/
 */
 var canJump = function(nums) {
    // 贪心
    if(nums.length === 1) return true
    let step = 0
    for(let i = 0; i <= step; i++) {
        step = Math.max(step, i + nums[i])
        if(step >= nums.length - 1) return true
    }
    return false
};
// @lc code=end

