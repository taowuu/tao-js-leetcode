// https://leetcode.cn/problems/merge-two-sorted-lists/

var mergeTwoLists = function(l1, l2) {
    const l3 = new ListNode(0)

    let p1 = l1,
        p2 = l2,
        p3 = l3
    // 当 l1 和 l2 都有节点
    while(p1 && p2) {
        // 小节点接入
        if(p1.val < p2.val) {
            p3.next = p1
            p1 = p1.next
        } else {
            p3.next = p2
            p2 = p2.next
        }
        
        p3 = p3.next
    }
    // 将剩余的 l1 或 l2 接入
    if(p1) {
        p3.next = p1
    }
    if(p2) {
        p3.next = p2
    }

    return l3.next
}
