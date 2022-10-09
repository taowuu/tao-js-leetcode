// https://leetcode.cn/problems/reverse-linked-list/

var reverseList = function(head) {
    let l = null,
        r = head
    
    while(r) {
        let temp = r.next
        r.next = l
        l = r
        r = temp
    }

    return l
}