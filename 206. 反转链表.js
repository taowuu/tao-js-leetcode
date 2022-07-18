// https://leetcode.cn/problems/reverse-linked-list/
// 递归法
// 1. 递归终止条件
// 2. 问下一次递归要结果
// 3. 进行当前递归的操作
// 4. 返回结果
var reverseList = function(head) {
  if(head == null || head.next == null) {
    return head
  }
  var reverseHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return reverseHead
}