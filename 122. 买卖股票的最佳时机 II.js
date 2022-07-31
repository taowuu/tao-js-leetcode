/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
 */
var maxProfit = function(prices) {
    if(prices.length === 0) return 0
    p = prices
    let res = 0
    for(let i = 1; i < p.length; i++) {
        if(p[i - 1] < p[i]) {
            res += p[i] - p[i - 1]
        }
    }    
    return res
};