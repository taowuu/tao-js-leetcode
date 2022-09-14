/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
* https://leetcode.cn/problems/simplify-path/
 */
var simplifyPath = function(path) {
    // 栈
    let arr = path.split('/')
    let stack = new Array()
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] && arr[i] !== '.' && arr[i] !== '..') {
            stack.push(arr[i])
        } else if(arr[i] === '..') {
            stack.length && stack.pop()
        }
    }
    return '/' + stack.join('/')
};
// @lc code=end

