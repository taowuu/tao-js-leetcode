/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.cn/problems/two-sum/
 */
 var twoSum = function(nums, target) {
    // 哈希表缓存
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if(map.has(diff)) return [i, map.get(diff)]
        else map.set(nums[i], i)
    }
};
// @lc code=end

