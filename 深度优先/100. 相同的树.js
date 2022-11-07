// https://leetcode.cn/problems/same-tree/

var isSameTree = function(p, q) {
    // 两个都为空
    if(!p && !q) return true
    // 一个空一个不空
    if(!p || !q) return false
    // 两树对应值不同
    if(p.val !== q.val) return false
    // 深度优先 先左子树后右子树
    return isSameTree(p.left, q.left)
        && isSameTree(p.right, q.right)

}
