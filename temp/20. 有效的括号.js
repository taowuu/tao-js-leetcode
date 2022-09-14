/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} str
 * @return {boolean}
 * https://leetcode.cn/problems/valid-parentheses/
 */
 var isValid = function(str) {
    // 栈
    const map = new Map()
    map.set('(', ')')
    map.set('{', '}')
    map.set('[', ']')
    const stack = new Array()
    for(let s of str) {
        if(map.has(s)) stack.push(s)
        else {
            let val = stack.length > 0 ? stack.pop() : 'err'
            if(s === map.get(val)) continue
            else return false
        }
    }
    return stack.length === 0
};
// @lc code=end

