/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode.cn/problems/3sum/
 */
 var threeSum = function(nums) {
  var n = nums.length
  if (n < 3) return []
  // 反向双指针，先升序
  nums.sort(function(a, b){return a-b})
  var res = []
  for(var k = 0; k < n - 2; k++) {
      // 优化
      if(nums[k] > 0) break
      // 相同 k 会得到重复结果
      if(k > 0 && nums[k] == nums[k-1]) continue
      var i = k + 1
      var j = n - 1
      // 双指针
      while(i < j) {
          var sum = nums[k] + nums[i] + nums[j]
          if(sum < 0) {
              // 相同 i 会得到重复结果
              // 寻找大数中和为 0
              while(i < j && nums[i] == nums[++i]);
          } else if(sum > 0) {
              // 相同 j 会得到重复结果
              // 寻找小数中和为 0
              while(i < j && nums[j] == nums[--j]);
          } else {
              // 答案
              res.push([nums[k],nums[i],nums[j]])
              while(i < j && nums[i] == nums[++i]);
              while(i < j && nums[j] == nums[--j]);
          }
      }
  }
  return res
};