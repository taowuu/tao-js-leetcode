// https://leetcode.cn/problems/guess-number-higher-or-lower/

var guessNumber = function(n) {
    let start = 0,
        end = n
    // 相等时也要猜测这个数
    while(start <= end) {
        let mid = Math.floor((start + end) / 2)
        let res = guess(mid)

        if(res === 0) {
            return mid
        } else if(res === 1) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
}
