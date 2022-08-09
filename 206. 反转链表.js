/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * https://leetcode.cn/problems/reverse-linked-list/submissions/
 */
 var reverseList = function(head) {
  if(head == null || head.next == null) {
      return head
  }
  let temp = reverseList(head.next)
  head.next.next = head
  head.next = null
  return temp
};
var reverseList = function(head) {
  if(!head || !head.next) return head
  let prev = null,
      cur = head
  while(cur) {
      // 保留下一个节点
      let n = cur.next
      cur.next = prev
      prev = cur
      cur = n
  } 
  return prev
};