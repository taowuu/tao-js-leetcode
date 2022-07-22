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
  // 递归法
  // 递归终止条件
  if(head == null || head.next == null) {
      return head
  }
  // 向子问题要答案
  var reHead = reverseList(head.next)
  // 当前递归的操作
  // 选取中间状态观察
  head.next.next = head
  head.next = null
  // 返回结果
  return reHead
};