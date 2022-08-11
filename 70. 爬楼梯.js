/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/climbing-stairs/
 * 0 - 0
 * 1 - 1
 * 2 - 1+1 2
 */
 var climbStairs = function(n) {
  // 动态规划
  let dp = new Array(n + 2)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2
  for(let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};
// @lc code=end

