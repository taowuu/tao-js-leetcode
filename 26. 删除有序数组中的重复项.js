/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/submissions/
 */
 var removeDuplicates = function(nums) {
    // 同向双指针
    // tail 之后为处理好的结果
    var tail = 0
    var cur = 0
    // cur 走完结束循环
    while(cur < nums.length) {
        // 给结果保留第一个值
        // tail 回退一个位置
        // 元素不同则都向前
        // tail 停在要修改的位置
        // cur 寻找要用来修改的值
        if(tail == 0 || nums[tail-1] != nums[cur]) {
            nums[tail] = nums[cur]
            tail++
            cur++
        } else {
            // 元素相同 cur 向前
            cur++
        }
    }
    return tail
};