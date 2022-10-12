// https://leetcode.cn/problems/binary-tree-level-order-traversal/

var levelOrder = function(root) {
    if(!root) return []

    const q = [[root, 0]]
    const res = []

    while(q.length) {
        const [n, l] = q.shift()
        
        if(!res[l]) {
            res.push([n.val])
        } else {
            res[l].push(n.val)
        }

        n.left && q.push([n.left, l + 1])
        n.right && q.push([n.right, l + 1])
    }

    return res
}
