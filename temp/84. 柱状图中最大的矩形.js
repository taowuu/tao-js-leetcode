/**
 * @param {number[]} heights
 * @return {number}
 * https://leetcode.cn/problems/largest-rectangle-in-histogram/
 */
 var largestRectangleArea = function(heights) {
  if (heights == null) return 0
  // 处理第一根柱子下标为 0 且无左边界
  var s = [-1]
  var area = 0
  var n = heights.length
  // 枚举以每根柱子为高度所构成的面积
  // 左边界为已经遍历的比当前柱子低的柱子
  // 右边界为即正在遍历的比当前柱子低的柱子
  // 即为从小到大的单调栈
  // 维护栈的同时得出答案
  for(var i = 0; i < n; i++) {
      // 先处理出栈 while
      while(s.length > 1 && heights[s[s.length-1]] > heights[i]) {
          var top = s.pop()
          var h  = heights[top]
          // 计算宽度使用左右边界下标相减
          // 下标从 0 开始等于没减故 -1
          var _area = (i - s[s.length-1] - 1) * h
          area = Math.max(area, _area)
      }
      s.push(i)
  }
  // 栈未空时的处理
  while(s.length > 1) {
      var top = s.pop()
      // console.log(s[s.length-1])
      // 此时已经无右边界不需要 -1
      var _area = (n - 1 - s[s.length-1]) * heights[top]
      // console.log(_area)
      area = Math.max(area, _area)
  }
  return area
};