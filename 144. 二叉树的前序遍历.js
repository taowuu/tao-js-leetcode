/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/
 */
 var preorderTraversal = function(root) {
  // 递归
  let res = []
  helper(root, res)
  return res
};
const helper = (node, res) => {
  if(node === null) {
      return res
  }
  res.push(node.val)
  helper(node.left, res)
  helper(node.right, res)
}
// @lc code=end

