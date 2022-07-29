/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode.cn/problems/subsets/
 */
 var subsets = function(nums) {
    if(nums == null) return []
    // 全局变量
    let res = []
    // 递归调用
    helper(nums, res, [], 0)
    return res
};

const helper = (nums, res, list, i) => {
    // 递归终止
    if(i == nums.length) {
        // 创造新数组，避免引用传递
        res.push(list.slice())
        return
    }
    // 当前层
    // 不选 i
    // 下一层
    helper(nums, res, list, i + 1)
    // 选 i，下一层
    list.push(nums[i])
    helper(nums, res, list, i + 1)
    // 清除当前层数据
    list.pop() 
}