/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 * https://leetcode.cn/problems/triangle/
 */
 var minimumTotal = function(triangle) {
    // 动态规划
    let dp = triangle
    if(dp.length === 1) return dp[0][0]
    for(let i = dp.length - 2; i > -1; i--) {
        for(let j = 0; j < dp[i].length; j++) {
            dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1])
        }
    }
    return dp[0][0]
};
// @lc code=end

