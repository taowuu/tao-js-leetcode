/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * https://leetcode.cn/problems/sliding-window-maximum/
 */
 var maxSlidingWindow = function(nums, k) {
    if(nums.length === 1) return nums
    let q = []
    let res = []
    for(let i = 0; i < nums.length; i++) {
        if(q.length > 0 && q[0] === i - k) q.shift()
        while(q.length > 0 && nums[i] > nums[q[q.length - 1]]) q.pop()
        q.push(i)
        if(i >= k - 1) res.push(nums[q[0]])
    }
    return res
};
// @lc code=end

