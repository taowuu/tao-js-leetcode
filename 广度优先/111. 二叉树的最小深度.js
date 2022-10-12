// https://leetcode.cn/problems/minimum-depth-of-binary-tree/

var minDepth = function(root) {
    if(!root) return 0

    const q = [[root, 1]]

    while(q.length) {
        const [n, l] = q.shift()

        if(!n.left && !n.right) {
            return l
        }

        n.left && q.push([n.left, l + 1])
        n.right && q.push([n.right, l + 1])
    }
}
