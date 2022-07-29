/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * https://leetcode.cn/problems/validate-binary-search-tree/
 */
 var isValidBST = function(root) {
    // left < cur < right
    // 递归比较
    return helper(root, -Infinity, Infinity)
};
var helper = function(node, lower, upper) {
    // 终止条件
    if(node == null) {
        // 需要返回值作判断
        return true
    }
    // 剪枝
    if (node.val <= lower || node.val >= upper) {
        return false;
    }
    // 向子问题要答案
    // 遍历左子树，当前节点作为上界
    let l = helper(node.left, lower, node.val)
    // 遍历右子树，当前节点作为下界
    let r = helper(node.right, node.val, upper)
    // 把答案交给父问题
    return l && r
}