/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 * https://leetcode.cn/problems/power-of-two/
 */
// var isPowerOfTwo = function(n) {
//     if(n < 1) return false
//     while(n !== 1) {
//         if(n % 2 === 1) return false
//         n = Math.floor(n / 2)
//     }
//     return true    
// };
var isPowerOfTwo = function(n) {
    // 100
    // 011
    return n > 0 && (n & (n-1)) === 0    
};
// @lc code=end

