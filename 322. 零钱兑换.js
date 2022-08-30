/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * https://leetcode.cn/problems/coin-change/
 */
 var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for(let i = 1; i < amount + 1; i++) {
        for(let j = 0; j < coins.length; j++) {
            if(coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }        
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};
// @lc code=end

