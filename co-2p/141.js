// https://leetcode.cn/problems/linked-list-cycle/

var hasCycle = function(head) {
    // 快慢指针
    let fast = head,
        slow = head
    // 防止 fast.next.next 报错
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        // 指针相遇说明有环
        if(fast === slow) return true
    }

    return false
}
