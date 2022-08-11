/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/submissions/
 */
 var removeDuplicates = function(nums) {
    // 快慢指针
    if(nums.length === 1) return 1
    let slow = 0,
        fast = 1
    while(fast <= nums.length) {
        if(nums[slow] === nums[fast]) {
            fast++
        } else {
            nums[++slow] = nums[fast]
        }
    }
    return slow
};
// @lc code=end

