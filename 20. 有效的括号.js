/*
* @param {string} s
* @return {boolean}
https://leetcode.cn/problems/valid-parentheses/
*/
var isValid = function(s) {
    let stack = []
    let d = {
        '(':')',
        '[':']',
        '{':'}',
    }
    for(let i = 0; i < s.length; i++) {
        if(s[i] in d) {
            // 左括号入栈
            stack.push(s[i])
        } else {
            // 右括号和左括号对应的值相比
            let e = stack.pop()
            if(s[i] !== d[e]) return false
        }
    }
    // 括号无剩余
    return !stack.length
};