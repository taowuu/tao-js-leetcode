/**
 * @param {number[][]} triangle
 * @return {number}
 * https://leetcode.cn/problems/triangle/
 */
var minimumTotal = function(triangle) {
    let dp = triangle
    // 自底向上，底已经初始化
    // 状态转移
    for(let i = dp.length - 2; i > -1; i--) {
        for(let j = 0; j < dp[i].length; j ++) {
            dp[i][j] += Math.min(dp[i+1][j], dp[i+1][j+1])
        }
    } 
    // 最终状态
    return dp[0][0]
};