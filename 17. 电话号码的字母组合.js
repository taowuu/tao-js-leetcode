/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
 */
 var letterCombinations = function(digits) {
    // 递归
    const map = new Map()
    map.set('2', ['a', 'b', 'c'])
    map.set('3', ['d', 'e', 'f'])
    map.set('4', ['g', 'h', 'i'])
    map.set('5', ['j', 'k', 'l'])
    map.set('6', ['m', 'n', 'o'])
    map.set('7', ['p', 'q', 'r', 's'])
    map.set('8', ['t', 'u', 'v'])
    map.set('9', ['w', 'x', 'y', 'z'])
    if(digits.length <= 1) {
        return map.get(digits) ? map.get(digits) : new Array()
    }
    const res = new Array()
    helper(digits, map, res, '', 0)
    return res
};
const helper = (digits, map, res, str, i) => {
    if(digits.length === i) {
        res.push(str)
        return
    }
    let arr = map.get(digits[i])
    for(let s of arr) {
        helper(digits, map, res, str + s, i + 1)
    }
}
// @lc code=end

