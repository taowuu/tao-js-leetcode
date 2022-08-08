/**
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/fibonacci-number/
 */
var fib = function(n) {
    // 自底向上 test
    let a = [0, 1]
    for(let i = 2; i < n; i++) {
        a[i] = a[i - 1] + a[i - 2]
    }
    return a[i]
};
var fib = function(n) {
    if(n <= 1) return n
    let dp1 = 0
    let dp2 = 1
    let dp3 = 0
    for(let i = 2; i <= n; i++) {
        dp3 = dp1 + dp2
        dp1 = dp2
        dp2 = dp3
    }
    return dp3
};