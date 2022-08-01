/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/unique-paths/
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0)
                .map(() => new Array(n).fill(0))
    // 定义初始状态
    for(let i = 0; i < m; i++) {
        dp[i][0] = 1
    }
    for(let j = 0; j < n; j++) {
        dp[0][j] = 1
    }
    // 向初始转移
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    // 返回最终状态 
    return dp[m - 1][n - 1]
};