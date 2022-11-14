// https://leetcode.cn/problems/symmetric-tree/

var isSymmetric = function(root) {    
    const helper = (l, r) => {
        // 两个都为空
        if(!l && !r) return true
        // 一个空一个不空
        if(!l || !r) return false
        // 左子树左节点 和 右子树右节点不对称
        if(l.val !== r.val) return false
        // 深度优先 
        // 先比较左子树左节点和 和 右子树右节点
        // 再比较左子树右节点和 和 右子树左节点
        return helper(l.left, r.right)
            && helper(l.right, r.left)
    }

    return helper(root.left, root.right)
}
