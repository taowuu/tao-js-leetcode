// https://leetcode.cn/problems/same-tree/

var isSameTree = function(p, q) {
    if(!p && !q) return true
    // 一个空一个不空
    if(!p || !q) return false
    // 两边值不同
    if(p.val !== q.val) return false
    // 深度优先 先左后右
    // 都为空
    return isSameTree(p.left, q.left)
        && isSameTree(p.right, q.right)

}
