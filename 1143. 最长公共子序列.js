/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * https://leetcode.cn/problems/longest-common-subsequence/
 */
 var longestCommonSubsequence = function(text1, text2) {
    let a1 = text1.split("")
    let a2 = text2.split("")
    let n1 = a1.length
    let n2 = a2.length
    // 初始状态
    let dp = new Array(n1 + 1).fill(0)
                .map(() => new Array(n2 + 1).fill(0))
    // 状态转移
    for(let i = 1; i < n1 + 1; i++) {
        for(let j = 1; j < n2 + 1; j++) {
            if(a1[i - 1] === a2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    // 返回最终状态
    return dp[n1][n2]
};