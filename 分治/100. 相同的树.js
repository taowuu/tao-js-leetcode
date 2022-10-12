// https://leetcode.cn/problems/same-tree/

var isSameTree = function(p, q) {
    const helper = (p, q) => {
        if(!p && !q) return true
        
        if(p && q && p.val === q.val
            && helper(p.left, q.left)
            && helper(p.right, q.right)
        ) {
            return true
        }

        return false
    }

    return helper(p, q)
}
