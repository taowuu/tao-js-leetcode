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
  // dfs bottom up 递归
  // 边界处理即递归终止条件
  if(root == null) {
      return 0
  }
  // 无需全局答案
  // 向子问题要答案
  var leftVal = maxDepth(root.left)
  var rightVal = maxDepth(root.right)
  var res = Math.max(leftVal, rightVal) + 1
  // 把答案交给父问题
  return res
};