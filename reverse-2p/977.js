// https://leetcode.cn/problems/squares-of-a-sorted-array/

var sortedSquares = function(nums) {
    // 边界处理
    if(nums.length === 0) return []
    // 反向双指针
    const res = []
    let right = nums.length - 1,
        left = 0
    // 极大值只会在数字首尾产生
    // 从后往前填充数组
    let end = right
    // 同一个值也要填入数组
    while(left <= right) {
        let rv = Math.pow(nums[right], 2)
        let lv = Math.pow(nums[left], 2)

        if(rv > lv) {
            res[end] = rv
            right--
        } else {
            res[end] = lv
            left++
        }

        end--
    }

    return res
}
