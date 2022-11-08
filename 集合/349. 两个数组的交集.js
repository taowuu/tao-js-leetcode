// https://leetcode.cn/problems/intersection-of-two-arrays/

var intersection = function(nums1, nums2) {
    const res = new Set(nums1)
    // 过滤留下 n1 和 n2 公共部分
    return [...res].filter(n => nums2.includes(n))
}
