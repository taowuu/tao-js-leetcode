/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * https://leetcode.cn/problems/sliding-window-maximum/
 */
 var maxSlidingWindow = function(nums, k) {
  // 边界处理
  if(nums == null || k == 0) {
      return []
  }
  
  // 只有一个元素最大值就是自己
  if(nums.length == 1) {
      return [nums[0]]
  }
  // 单调队列和结果
  var q = []
  var res = []
  // 遍历
  for(var i = 0; i < nums.length; i++) {
      // 维护单调队列长度
      // 队满移除头
      if(q.length > 0 && q[0] == i - k) {
          q.shift()
      }
      // 维护递减队列
      // 入队元素大则清除队尾元素
      while(q.length > 0 && nums[i] > nums[q[q.length-1]]) {
          q.pop()
      }
      q.push(i)
      // 窗口最大值放入结果
      // 当窗口达到 k 时
      if(i >= k - 1) {
          res.push(nums[q[0]])
      }
  }
  return res
};