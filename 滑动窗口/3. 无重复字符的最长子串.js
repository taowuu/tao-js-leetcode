// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    let l = 0
    const memo = {}
    let res = 0

    for(let r = 0; r < s.length; r++) {
        if(s[r] in memo && memo[s[r]] >= l) {
            l = memo[s[r]] + 1
        }
        res = Math.max(res, r - l + 1)
        memo[s[r]] = r
    }

    return res
}
