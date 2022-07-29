/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.cn/problems/two-sum/
 */
 var twoSum = function(nums, target) {
    // 创建哈希表查询目标值
    const map = new Map()
    // 遍历
    for(let i = 0; i <nums.length; i++) {
        // 计算差值
        let val = target - nums[i]
        // 差值找到即为答案
        if(map.has(val)) {
            return [map.get(val), i]
        }
        // 为每个值记录下标
        map.set(nums[i], i)
    }
    return []
};