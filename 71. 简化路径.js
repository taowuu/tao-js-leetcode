/**
* @param {string} path
* @return {string}
* https://leetcode.cn/problems/simplify-path/
*/
var simplifyPath = function(path) {
    let stack = []
    let paths = path.split("/")
    for(let i = 0; i < paths.length; i++) {
        let e = paths[i]
        if(e && e !== '.' && e !== '..') {
            stack.push(e)
        } else if(e === '..') {
            stack.pop()
        }
    }
    return '/' + stack.join('/')
};