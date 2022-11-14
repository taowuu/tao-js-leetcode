// https://leetcode.cn/problems/invert-binary-tree/

var invertTree = function(root) {
    // 不返回值会返回 undefined 无法通过
    if(!root) return null
    // 左右子树交换逻辑
    let temp = root.left
    root.left = root.right
    root.right = temp
    // 深度优先
    // 分别交换每个节点自己的左右子树
    invertTree(root.left)
    invertTree(root.right)
    // 最后返回根节点
    return root
}
