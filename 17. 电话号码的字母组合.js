/**
 * @param {string} digits
 * @return {string[]}
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
 */
 var letterCombinations = function(digits) {
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }
    // 边界处理: 1, ""
    if(digits.length <= 1) {
        return map[digits] ? map[digits] : []
    }
    // 局部变量
    const res = new Array()
    // 递归调用
    helper(digits, map, res, '', 0)
    return res
};
// 
const helper = (digits, map, res, s, i) => {
    // 递归终止条件
    if(digits.length === i) {
        res.push(s)
        return
    }
    // 当前层操作 no
    // 向子问题要答案
    let key = digits.charAt(i)
    let arr = map[key]
    for(let j of arr) {
        helper(digits, map, res, s + j, i + 1)
    } 
    // 清除当前层状态 no
    // 答案交给父问题 no
}