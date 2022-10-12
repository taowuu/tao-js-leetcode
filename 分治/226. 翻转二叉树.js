// https://leetcode.cn/problems/invert-binary-tree/

var invertTree = function(root) {
    const helper = n => {
        if(!n) return

        let t = n.left
        n.left = n.right
        n.right = t

        helper(n.left)
        helper(n.right)
    }

    helper(root)

    return root
}
