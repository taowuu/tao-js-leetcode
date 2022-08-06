/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * https://leetcode.cn/problems/assign-cookies/
 */
 var findContentChildren = function(g, s) {
    // 排序
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b)
    // 用最小饼干满足胃口最小孩子
    let res = 0
    let i = 0
    let j = 0
    while(i < g.length && j < s.length) {
        // 饼干满足
        if(g[i] <= s[j]) {
            res += 1
            i++
            j++
        } else {
            // 饼干不满足
            j++
        }
    }
    return res
};
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