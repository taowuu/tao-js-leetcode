// https://leetcode.cn/problems/two-sum/

var twoSum = function(nums, target) {
    const memo = {}

    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if(diff in memo) {
            return [i, memo[diff]]
        } else {
            memo[nums[i]] = i
        }
    }
}
