/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.cn/problems/jump-game/
 */
var canJump = function(nums) {
    if(nums === null) return false
    // 能到达最后一个位置下标
    let reachEnd = nums.length - 1
    for(let i = reachEnd; i >= 0; i--) {
        // 当前下标加步数能否到达末尾下标
        if(nums[i] + i >= reachEnd) {
            reachEnd = i
        }
    }
    return reachEnd == 0
};
// 
var canJump = function(nums) {
    if(nums === null) return false
    let cover = 0
    for(let i = 0; i <= cover; i++) {
        cover = Math.max(cover, i + nums[i])
        // 当前下标加步数能否到达末尾下标
        if(cover >= nums.length - 1) return true
    }
    return false
};