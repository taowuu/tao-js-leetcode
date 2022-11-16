// https://leetcode.cn/problems/permutations/

// var permute = function(nums) {
//     const res = []

//     const backtrack = path => {
//         if(path.length === nums.length) {
//             res.push(path)
//             return
//         }

//         nums.forEach(n => {
//             if(path.includes(n)) return

//             backtrack(path.concat(n))
//         })
//     }

//     backtrack([])

//     return res
// }

var permute = function(nums) {
    const res = []
    const path = []

    const backtrack = nums => {
        if(path.length === nums.length) {
            // 长度足够添入新路径
            res.push(path.slice())
            return
        }
        
        for (const i in nums) {
            // 路径包含重复元素跳过
            if(path.includes(nums[i])) continue
            // 路径添加元素
            path.push(nums[i])
            // 递归
            backtrack(nums)
            // 回溯
            path.pop()
        }
    }

    backtrack(nums)

    return res
}
