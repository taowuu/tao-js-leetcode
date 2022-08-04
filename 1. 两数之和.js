/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.cn/problems/two-sum/
 */
var twoSum = function(nums, target) {
    let obj = {}
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let ans = target - num
        // 找到与之配对的数
        // 返回当前数下标和配对数下标
        if(ans in obj) {
            return [i, obj[ans]]
        } else {
            // 为每个数记录下标
            obj[num] = i
        }
    }
};