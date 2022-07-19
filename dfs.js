// https://leetcode.cn/problems/binary-tree-preorder-traversal
var preorderTraversal = function(root) {
  // 边界处理
  if(root == null) {
    return []
  }
  // 全局答案
  var res = []
  dfs(root, res)
  return res
}
var dfs = function(node, res) {
  // 递归终止条件
  if(node == null) {
    return
  }
  // 向子问题要答案
  res.push(node.val)
  dfs(node.left, res)
  dfs(node.right, res)
}
// 
// top down dfs
// https://leetcode.cn/problems/sum-root-to-leaf-numbers/
var sumNumbers = function(root) {
  // 边界处理
  if(root == null) {
    return 0
  }
  var res = 0
  var dfs = function(root, item) {
    // 利用父问题传下来的值做计算
    item = item + String(root.val)
    // 递归终止条件
    if(root.left == null && root.right == null) {
      // 额外操作
      res += Number(item)
      return
    }
    // 把值传给子问题
    if(root.left != null) {
      dfs(root.left, item)
    }
    if(root.right != null) {
      dfs(root.right, item)
    }
  }
  dfs(root, 0)
  return res
}
// 
// bottom up dfs
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
var maxDepth = function(root) {
  // 递归终止条件
  if(root == null) {
    return 0
  }
  // 向子问题要答案
  var left = maxDepth(root.left)
  var right = maxDepth(root.right)
  // 子问题答案构建当前问题答案
  var res = Math.max(left, right) + 1
  // 把当前答案交给父问题
  return res
}
// https://leetcode.cn/problems/binary-tree-maximum-path-sum/
var maxPathSum = function(root) {
  return
}
