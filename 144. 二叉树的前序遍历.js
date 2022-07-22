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
  // dfs 递归法
  // 边界处理
  if(root == null) {
      return []
  }
  // 全局答案
  var res = []
  dfs(root, res)
  return res
};
var dfs = function(node, res) {
  // 终止条件
  if(node == null) {
      return
  }
  // 无需向子问题要答案
  // 当前递归层操作
  res.push(node.val)
  dfs(node.left, res)
  dfs(node.right, res)
  // 无需返回结果
}
