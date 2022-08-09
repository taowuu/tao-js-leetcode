/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.cn/problems/minimum-size-subarray-sum/
 */
var minSubArrayLen = function(target, nums) {
    let slow = 0,
        fast = 0,
        sum = 0,
        n = nums.length,
        res = n + 1
    while(fast < n) {
        sum += nums[fast++]
        while(sum >= target) {
            let sub = fast - slow
            res = sub < res ? sub : res
            sum -= nums[slow++]
        }
    }
    return res === n + 1 ? 0 : res
};