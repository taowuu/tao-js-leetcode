/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode.cn/problems/container-with-most-water/
 */
 var maxArea = function(h) {
  // 反向双指针
  // i->head, j->tail
  var i = 0
  var j = h.length - 1
  // 设置初始结果，边界处理
  var max = 0
  // 遍历
  while(i < j) {
      // 选出最小高度，走到下一个可能性
      var minHeight = h[i] < h[j] ? h[i++] : h[j--]
      // 下标变化了 1， 计算面积要加回来
      var area = (j - i + 1) * minHeight
      max = Math.max(max, area)
  }
  return max
};