/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/powx-n/
 */
 var myPow = function(x, n) {
    // 二分，分治，递归
    if(x === 0.0) return 0.0
    if(n === 0) return 1.0
    if(n === 1) return x
    let N = n
    return n > 0 ? helper(x, N) : 1.0 / helper(x, -N)
};
const helper = (x, N) => {
    if(N === 0) return 1.0
    let y = helper(x, Math.floor(N / 2))
    return N % 2 === 0 ? y * y : y * y * x
}
// @lc code=end

// console.log(!0.0)