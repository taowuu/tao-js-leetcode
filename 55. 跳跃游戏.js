/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.cn/problems/jump-game/
 */
var canJump = function(nums) {
    if(nums === null) return false
    let reachEnd = nums.length - 1
    for(let i = reachEnd; i >= 0; i--) {
        // 更新前一个位置能否到达末尾
        if(nums[i] + i >= reachEnd) {
            reachEnd = i
        }
    }
    return reachEnd == 0
};