/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/submissions/
 */
 var maxDepth = function(root) {
  // 递归
  let res = 0
  return helper(root, res)
};
const helper = (node, temp) => {
  if(node === null) return temp
  let l = helper(node.left, temp + 1)
  let r = helper(node.right, temp + 1)
  return Math.max(l, r)
}
// @lc code=end

