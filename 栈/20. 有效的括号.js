// https://leetcode.cn/problems/valid-parentheses/

var isValid = function(str) {
    const s = []
    const memo = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for(i of str) {
        if(i in memo) {
            s.push(i)
        } else {
            let c = s && s.pop()
            if(i !== memo[c]) return false
        }
    }

    return s.length === 0
}