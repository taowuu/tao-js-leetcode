// https://leetcode.cn/problems/linked-list-cycle/

var hasCycle = function(head) {
    let f = head,
        s = head
    
    while(f && f.next) {
        f = f.next.next
        s = s.next
        if(f === s) return true
    }

    return false
}