// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    let l = 0,
        r = 0
    const memo = {}
    let res = 0

    while(r < s.length) {
        let c = s[r]

        if(c in memo && memo[c] >= l) {
            l = memo[s[r]] + 1
        }

        res = Math.max(res, r - l + 1)
        memo[s[r]] = r
        r++
    }

    return res
}
