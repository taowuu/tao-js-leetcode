/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * https://leetcode.cn/problems/move-zeroes/
 */
 var moveZeroes = function(nums) {
  // 同向双指针
  // j 下一个非 0 元素
  var j = 0
  // 遍历
  for(var i = 0; i < nums.length; i++) {
      // 当前元素不是 0
      if(nums[i] != 0) {
          // 填到非 0 位置 j
          nums[j] = nums[i]
          // 当前元素置为 0
          // 保护第一个非 0 元素
          if(i != j) {
              nums[i] = 0
          }
          j++
      }
  }
};