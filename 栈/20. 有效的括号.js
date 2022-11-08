// https://leetcode.cn/problems/valid-parentheses/

var isValid = function(str) {
    // 括号匹配使用栈
    const stack = []
    // 缓存匹配关系
    const memo = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    
    for(value of str) {
        if(value in memo) {
            // 遇到左括号入栈
            stack.push(value)
        } else {
            // 遇到右括号出栈
            let char = stack && stack.pop()
            // 判断左右括号是否匹配
            if(value !== memo[char]) return false
        }
    }
    // 确保括号完全被匹配
    return stack.length === 0
}
