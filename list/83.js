// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function(head) {
    let p = head

    while(p) {
        let n = p && p.next
        // 下一个的值相同则继续下探
        while(n && n.val === p.val) {
            n = n.next
        }
        // 连上下一个不同的节点
        p.next = n
        // p 从下一个节点继续
        p = n
    }

    return head
}
