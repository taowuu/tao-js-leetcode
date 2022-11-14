// https://leetcode.cn/problems/reverse-linked-list/

var reverseList = function(head) {
    let left = null,
        right = head
    // null 1 -> 2 -> 3
    // l    r    t
    // null <- 1  2 -> 3
    //         l  r    t 
    while(right) {
        let temp = right.next // 2
        right.next = left // 1->null
        left = right // 1
        right = temp // 2
    }
    // 最后 right 为 null
    return left
}
