/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * https://leetcode.cn/problems/assign-cookies/
 */
 var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    // 用最大饼干满足胃口最大孩子
    let res = 0
    let j = s.length - 1
    for(let i = g.length - 1; i >= 0; i--) {
        if(j >= 0 && s[j] >= g[i]) {
            res++
            j--
        }
    }
    return res
};
// @lc code=end

