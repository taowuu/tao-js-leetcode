/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * https://leetcode.cn/problems/reverse-string/submissions/
 */
var reverseString = function(s) {
    // 反向双指针
    var tail = 0
    var head = s.length-1
    // 两指针相遇之后结束循环
    while(tail <= head) {
        var temp = s[tail]
        s[tail] = s[head]
        s[head] = temp
        tail++
        head--
    }
};