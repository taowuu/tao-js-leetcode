/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * https://leetcode.cn/problems/remove-linked-list-elements/
 */
// var removeElements = function(head, val) {
//     // 需要 head
//     if(head === null) {
//         return head
//     }
//     // 连接移除 val 后的链表
//     head.next = removeElements(head.next, val)
//     // 移除 val 后的链表交给父问题
//     return head.val === val ? head.next : head
// };
var removeElements = function(head, val) {
    // 虚拟头
    let dummy = {
        next: head
    }
    let cur = dummy
    // 需要操作 next val
    while(cur.next !== null) {
        if(cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return dummy.next
};