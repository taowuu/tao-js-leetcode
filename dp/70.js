// https://leetcode.cn/problems/climbing-stairs/

var climbStairs = function(n) {
    // 一阶或二阶只有一种爬法
    if(n < 2) return 1
    // 定义：i 阶的爬法数为 dp[i]
    const dp = [1, 1]
    // i 阶楼梯的爬法由 i-1 和 i-2 来决定
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    // 返回第 n 阶爬法
    return dp[n]
}
