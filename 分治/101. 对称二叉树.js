// https://leetcode.cn/problems/symmetric-tree/

var isSymmetric = function(root) {
    const helper = (l, r) => {
        if(!l && !r) return true

        if(l && r && l.val === r.val
            && helper(l.left, r.right)
            && helper(l.right, r.left)
        ) {
            return true
        }

        return false
    }

    return helper(root.left, root.right)
}
