/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 * https://leetcode.cn/problems/generate-parentheses/
 */
 var generateParenthesis = function(n) {
    // 剪枝
    if(n === 1) return ['()']
    const res = new Array()
    helper(n, res, 0, 0, '')
    return res
};
const helper = (n, res, left, right, str) => {
    if(left === n && right === n) {
        res.push(str)
        return
    }
    if(left < n) helper(n, res, left + 1, right, str + '(')
    if(right < left) helper(n, res, left, right + 1, str + ')')
}
// @lc code=end
