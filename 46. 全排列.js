/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode.cn/problems/permutations/
 */
var permute = function(nums) {
    if(nums === null || nums.length === 0) {
        return []
    }
    let res = []
    helper(nums, res, [])
    return res
};

const helper = (nums, res, temp) => {
    if(temp.length === nums.length) {
        return res.push([...temp])
    }
    for(n of nums) {
        if(temp.includes(n)) continue
        temp.push(n)
        helper(nums, res, temp)
        temp.pop()
    }
}