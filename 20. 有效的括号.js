/**
 * @param {string} s
 * @return {boolean}
 * https://leetcode.cn/problems/valid-parentheses/
 */
 var isValid = function(s) {
  var dic = {
      '{':'}',
      '[':']',
      '(':')',
      '?':'?',
  }
  var arr = s.split("")
  // 避免 pop 空情况
  var stack = ['?']
  for (var e of arr) {
      if(e in dic) {
          stack.push(e)
      } else if(dic[stack.pop()] != e) {
          return false
      }
  }
  // 不能 return true 避免单括号情况
  return stack.length == 1
};