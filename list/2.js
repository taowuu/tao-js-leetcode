// https://leetcode.cn/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
    const l3 = new ListNode(0)

    let p1 = l1,
        p2 = l2,
        p3 = l3
    // 进位
    let carry = 0
    // 当 l1 或 l2 中还剩余节点
    while(p1 || p2) {
        let v1 = p1 && p1.val,
            v2 = p2 && p2.val

        let sum = v1 + v2 + carry

        carry = Math.floor(sum / 10)

        p3.next = new ListNode(sum % 10)
        p1 = p1 && p1.next
        p2 = p2 && p2.next
        p3 = p3.next
    }
    // 最高位
    p3.next = carry ? new ListNode(carry) : null

    return l3.next
}
