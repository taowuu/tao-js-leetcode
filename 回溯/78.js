// https://leetcode.cn/problems/subsets/

var subsets = function(nums) {
    const res = []
    const path = []

    const backtrack = (nums, start) => {
        // 先收集子集
        res.push(path.slice())
        // 循环条件就是终止条件
        for(let j = start; j < nums.length; j++) {
            path.push(nums[j])
            backtrack(nums, j + 1)
            path.pop()
        }
    }

    backtrack(nums, 0)

    return res
}
