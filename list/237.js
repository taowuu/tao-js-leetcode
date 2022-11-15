https://leetcode.cn/problems/delete-node-in-a-linked-list/

var deleteNode = function(node) {
    // 改变要删除节点的值
    node.val = node.next.val
    // 此时有两个相同的节点
    // 跳过其中一个
    node.next = node.next.next
}
