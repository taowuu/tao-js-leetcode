// https://leetcode.cn/problems/two-sum/

var twoSum = function(nums, target) {
    // 哈希表缓存
    const memo = {}
    
    for(let i = 0; i < nums.length; i++) {
        // 7 = 9 - 2
        let diff = target - nums[i]
        // 找到 7
        if(diff in memo) {
            return [i, memo[diff]]
        } else {
            // 找不到存入 2
            // 下次走到 7 就可以返回这个 2
            memo[nums[i]] = i
        }
    }
}
