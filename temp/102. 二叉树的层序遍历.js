/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
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
 * @return {number[][]}
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/submissions/
 */
 var levelOrder = function(root) {
    // bfs
    if(root == null) return []
    let q = new Array(1).fill(root)
    let res = new Array()
    while(q.length > 0) {
        let level = q.length
        let temp = new Array()
        while(level > 0) {
            let cur = q.pop()
            temp.push(cur.val)
            if(cur.left !== null) q.unshift(cur.left)
            if(cur.right !== null) q.unshift(cur.right)
            level--
        }
        res.push(temp)
    }
    return res
};
// @lc code=end

