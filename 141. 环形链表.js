/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
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
 * https://leetcode.cn/problems/linked-list-cycle/
 */
 var hasCycle = function(head) {
    // 快慢指针
    let slow = head,
        fast = head
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) return true
    }
    return false
};
// @lc code=end

