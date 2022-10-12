// https://leetcode.cn/problems/binary-tree-inorder-traversal/

var inorderTraversal = function(root) {
    if(!root) return []

    const res = []

    const dfs = (n) => {
        if(!n) return

        dfs(n.left)
        res.push(n.val)
        dfs(n.right)
    }

    dfs(root)
    
    return res
}
