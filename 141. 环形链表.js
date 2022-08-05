/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//     let cache = new Set()
//     while(head) {
//         if(cache.has(head)) {
//             return true
//         } else {
//             cache.add(head)
//         }
//         head = head.next
//     }
//     return false
// };
var hasCycle = function(head) {
    let fast = head
    let slow = head
    // 确保有 head
    // 无环 fast 先走完
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) {
            return true
        }
    }
    return false
};