/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode.cn/problems/3sum/
 */
 var threeSum = function(nums) {
    // 反向双指针
    if(nums.length < 3) return new Array()
    nums.sort((a, b) => a - b)
    let res = new Array()
    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) break
        if(i > 0 && nums[i] === nums[i - 1]) continue
        let left = i + 1,
            right = nums.length - 1
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if(sum > 0) {
                while(left < right && nums[right] === nums[--right]);
            } else if(sum < 0) {
                while(left < right && nums[left] === nums[++left]);
            } else {
                res.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left] === nums[++left]);
                while(left < right && nums[right] === nums[--right]);
            }
        }
    }
    return res
};
// @lc code=end

