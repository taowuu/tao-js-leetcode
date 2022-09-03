/**
 * @param {number[]} temperatures
 * @return {number[]}
 * https://leetcode.cn/problems/daily-temperatures/
 */
 var dailyTemperatures = function(temperatures) {
  // 求当前值与它右边第一个比它大的值之间的距离
  // 从右向左填答案
  // 从右取大值，从左拿值比较
  // 先进后出，就是个单调栈
  var res = []
  var s = []
  var n = temperatures.length
  for(var i = n-1; i >= 0; i--) {
      while(s.lenght != 0 && temperatures[s[s.length-1]] <= temperatures[i]) {
          s.pop()
      } 
      s.push(i)
      res[i] = (s.length == 0) ? 0 : s[s.length-1] - i 
  }
  return res
};