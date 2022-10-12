// https://leetcode.cn/problems/guess-number-higher-or-lower/

var guessNumber = function(n) {
    let l = 0,
        h = n
    
    while(l <= h) {
        let m = Math.floor((l + h) / 2)
        let res = guess(m)

        if(res === 0) {
            return m
        } else if(res === 1) {
            l = m + 1
        } else {
            h = m - 1
        }
    }
}
