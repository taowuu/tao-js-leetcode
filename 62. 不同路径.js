/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/unique-paths/
 */
 var uniquePaths = function(m, n) {
    // 动态规划
    let dp = new Array(m).fill(0)
            .map(() => new Array(n).fill(0))
    for(let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for(let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};
// @lc code=end

