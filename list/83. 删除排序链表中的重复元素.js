// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function(head) {
    let p = head

    while(p) {
        let n = p && p.next
        while(n && n.val === p.val) {
            n = n.next
        }
        p.next = n
        p = n
    }

    return head
}
