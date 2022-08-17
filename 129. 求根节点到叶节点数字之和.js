/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @return {number}
 * https://leetcode.cn/problems/sum-root-to-leaf-numbers/
 */
 var sumNumbers = function(root) {
    // dfs
    return helper(root, 0)
};
const helper = (node, i) => {
    if (node == null) return 0
    let temp = i * 10 + node.val
    if(!node.left && !node.right) {
        return temp
    }
    let l = helper(node.left, temp)
    let r = helper(node.right, temp)
    return l + r    
}
// @lc code=end

