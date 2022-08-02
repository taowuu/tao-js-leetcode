/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // dp 数组：每个金额所需硬币的最小个数
    let _max = amount + 1
    let dp = new Array.from(_max).fill(_max)
    // 初始状态
    dp[0] = 0
    // 状态转移
    for(let i = 1; i < _max; i++) {
        for(let j = 0; j < coins.length; j++) {
            // 硬币可取的情况
            // 取了 + 1
            if(coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }        
        }
    }
    // 
    return dp[amount] === _max ? -1 : dp[amount]


};