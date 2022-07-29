/**
 * @param {number} n
 * @return {string[]}
 * https://leetcode.cn/problems/generate-parentheses/
 */
 var generateParenthesis = function(n) {
    // 保存全局答案
    res = []
    // 左括号随便给到 n
    // 右括号小于左才能给
    // 先调用递归
    helper(0, 0, n, '')
    return res
};

var helper = function(left, right, n, s) {
    // 递归终止
    if(left == n && right == n) {
        res.push(s)
        return
    }
    // 当前层处理
    // 需要剪枝所以处理放在下一层
    // 下一层
    if(left < n) {
        helper(left + 1, right, n, s + '(')
    }
    if(right < left && right < n) {
        helper(left, right + 1, n, s + ')')
    }
    // 无需清除当前层状态
    
}