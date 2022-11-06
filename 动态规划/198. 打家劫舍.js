// https://leetcode.cn/problems/house-robber/

var rob = function(nums) {
    // 边界处理
    if(nums.length === 0 || !nums) return 0
    // 定义：
    // 0 号房金额为 0
    // 1 号房金额为 nums[0]
    // i 号房金额为 nums[i]
    const dp = [0, nums[0]]
    // i 号房金额由 
    // i-2 号房和本房
    // 或是
    // i-1 号房和不偷本房
    // 中的最大金额决定
    // dp[i - 2] + nums[i - 1]
    for(let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    }
    // 返回最终金额
    return dp[nums.length]
}
