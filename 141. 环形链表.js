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
  // 边界处理
  if(head == null || head.next == null) {
      return false
  }
  var slow = head
  var fast = head.next
  while(slow != fast) {
      // 避免 fast 出错
      if(fast == null || fast.next == null) {
          return false
      }
      slow = slow.next
      fast = fast.next.next
  }
  return true
};