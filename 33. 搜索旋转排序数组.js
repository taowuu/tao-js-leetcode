/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/
 */
 var search = function(nums, target) {
    // 二分
    let left = 0,
        right = nums.length - 1
    while(left <= right) {
        let mid = left + (right - left) / 2
        mid = Math.floor(mid)
        if(nums[mid] === target) return mid
        else if(nums[mid] >= nums[left]) {
            if(target < nums[mid] && target >= nums[left]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if(target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};
// @lc code=end

