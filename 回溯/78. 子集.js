// https://leetcode.cn/problems/subsets/

var subsets = function(nums) {
    const res = []

    const backtrack = (path, l, start) => {
        if(path.length === l) {
            res.push(path)
            return
        }

        for(let j = start; j < nums.length; j++) {
            backtrack(path.concat(nums[j]), l, j + 1)
        }
    }

    for(let i = 0; i <= nums.length; i++) {
        backtrack([], i, 0)
    }

    return res
}
