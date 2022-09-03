/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/fibonacci-number/
 */
 var fib = function(n) {
    if(n <= 1) return n
    let f0 = 0,
        f1 = 1,
        i = 2
    while(i <= n) {
        f2 = f0 + f1
        f0 = f1
        f1 = f2
        i++
    }
    return f2
};
// @lc code=end

