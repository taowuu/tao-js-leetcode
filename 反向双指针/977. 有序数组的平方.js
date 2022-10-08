// https://leetcode.cn/problems/squares-of-a-sorted-array/

var sortedSquares = function(nums) {
    const res = []
    let r = nums.length - 1,
        l = 0
    let end = r

    while(l <= r) {
        let rv = nums[r] * nums[r]
        let lv = nums[l] * nums[l]
        if(rv > lv) {
            res[end] = rv
            r--
        } else {
            res[end] = lv
            l++
        }
        end--
    }

    return res
}
