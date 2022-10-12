// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function(p) {
    let res = 0

    for(let i = 1; i < p.length; i++) {
        if(p[i] > p[i - 1]) {
            res += p[i] - p[i - 1]
        }
    }

    return res
}
