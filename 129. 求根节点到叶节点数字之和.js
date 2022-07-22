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
  // dfs top down 递归法
  // 边界处理
  if(root == null) {
      return 0
  }
   // 全局答案
  var res = 0
  // 递归
  var dfs = function(root, item) {
      // 接收父问题传下的值做计算
      item += String(root.val)
      // 递归终止条件
      if(root.left == null && root.right == null) {
          // 额外操作
          res += Number(item)
          return 
      }
      // 无需向子问题要答案
      // 当前层的操作，把值传给子问题
      if(root.left != null) {
          dfs(root.left, item)
      }
      if(root.right != null) {
          dfs(root.right, item)
      }
      // 无需返回结果
  }
  // 传入初始层的值
  dfs(root, 0)
  // 返回答案
  return res
};
