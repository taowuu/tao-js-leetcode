// https://leetcode.cn/problems/path-sum/

var hasPathSum = function(root, targetSum) {
    if(!root) return false

    let res = false

    const dfs = (n, s) => {
        if(!n.left && !n.right) {
            if(s === targetSum) {
                res = true
            }
        }

        n.left && dfs(n.left, s + n.left.val)
        n.right && dfs(n.right, s + n.right.val)
    }

    dfs(root, root.val)

    return res
}
