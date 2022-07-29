/**
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/climbing-stairs/
 * 1: 1
 * 2: 2
 * 3: f(1) + f(2) 
 * 4: f(2) + f(3)
 * n: 走法来自前两层
 */
 var climbStairs = function(n) {
  // 最近重复子问题
  if (n <= 2) return n
  var f1 = 1
  var f2 = 2
  var f3 = 3
  for(var i = 3; i <= n; i++) {
      f3 = f2 + f1
      f1 = f2
      f2 = f3
  }
  return f3
};