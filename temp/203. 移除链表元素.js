/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
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
 var removeElements = function(head, val) {
    let dummy = {
        next: head
    }
    let cur = dummy
    while(cur.next !== null) {
        if(cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return dummy.next
};
// @lc code=end

