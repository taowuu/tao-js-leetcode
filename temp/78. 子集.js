/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode.cn/problems/subsets/
 */
 var subsets = function(nums) {
    // 回溯
    if(nums.length === 1) [new Array(), nums]
    let res = new Array()
    helper(nums, res, new Array(), 0)
    return res
};
const helper = (nums, res, temp, k) => {
    res.push(temp.slice())
    for(let i = k; i < nums.length; i++) {
        temp.push([nums[i]])
        helper(nums, res, temp, i + 1)
        temp.pop()
    }
}
// @lc code=end

