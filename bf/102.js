// https://leetcode.cn/problems/binary-tree-level-order-traversal/

var levelOrder = function(root) {
    if(!root) return []

    const q = [[root, 0]]
    const res = []
    // 当存在下一个层级
    while(q.length) {
        const [n, l] = q.shift()
        
        if(!res[l]) {
            // 层级初始化
            res.push([n.val])
        } else {
            // 追加至
            res[l].push(n.val)
        }
        // 加入下一层级
        n.left && q.push([n.left, l + 1])
        n.right && q.push([n.right, l + 1])
    }

    return res
}
