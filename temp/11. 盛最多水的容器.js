/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode.cn/problems/container-with-most-water/
 */
 var maxArea = function(height) {
    // 贪心，反向双指针
    let left = 0,
        right = height.length - 1,
        max = 0
    while(left <= right) {
        let minH = height[left] > height[right] ? height[right--] : height[left++]
        // 上方下标移动了 1 ，这里要加回来
        let area = (right - left + 1) * minH
        max = Math.max(max, area)
    }
    return max
};
// @lc code=end

