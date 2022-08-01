/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://leetcode.cn/problems/search-in-rotated-sorted-array/
 */
 var search = function(nums, target) {
    // 
    if(nums === null) return -1
    if(nums.length === 1) {
        return target === nums[0] ? 0 : -1
    }
    // 
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if(nums[mid] === target) {
            return mid
        }
        //  哪一半是有序的？
        if(nums[mid] < nums[right]) {
            // 后半有序
            if(target > nums[mid] && target <= nums[right]) {
                // 坐落在后半，砍掉左边
                left = mid + 1
            } else {
                // 砍掉右边
                right = mid - 1
            }
        } else {
            // 前半有序
            if(target < nums[mid] && target >= nums[left]) {
                // 坐落在前半，砍掉右边
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    } 
    // 
    return -1
};