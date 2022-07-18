// 解题核心定义栈
// 
// https://leetcode-cn.com/problems/daily-temperatures
// 每次向右边第一个值比较，所以从后遍历，使用栈
// 定义栈：
// 维护一个当前值右手边所有比当前值大的栈
var dailyTemperatures = function(temperatures) {
  var n = temperatures.length
  var res = []
  var stack= []
  for(var i = n-1; i >= 0; i--) {
    while(stack.length != 0 && temperatures[stack[stack.length-1]] <= temperatures[i]) {
      stack.pop()
    }
    res[i] = (stack.length == 0) ? 0 : stack[stack.length-1] - i
    stack.push(i)
  }
  return res
}