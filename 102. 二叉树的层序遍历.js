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
 * @return {number[][]}
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/submissions/
 */
 var levelOrder = function(root) {
  // bfs 
  // 边界处理
  if(root == null) {
      return []
  }
  // 保存每层节点
  var q = [root]
  // 最终结果
  var res = []
  // 遍历每层节点
  while(q.length > 0) {
      // 本层节点数
      var level = q.length
      // 本层节点值
      var temp = []
      // 处理本层节点
      while(level > 0) {
          var cur = q.pop()
          temp.push(cur.val)
          // 加入下层节点
          if(cur.left != null) {
              q.unshift(cur.left)
          }
          if(cur.right != null) {
              q.unshift(cur.right)
          }
          level--
      }   
      res.push(temp)
  }
  return res
};