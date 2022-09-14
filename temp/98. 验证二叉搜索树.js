/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    // 递归
    if(root.length === 1) return true
    return helper(root, -Infinity, Infinity)
};
const helper = (node, low, up) => {
    if(node === null) return true
    if(node.val <= low || node.val >= up) return false
    let l = helper(node.left, low, node.val)
    let r = helper(node.right, node.val, up)
    return l && r
}
// @lc code=end

