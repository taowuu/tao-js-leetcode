/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * https://leetcode.cn/problems/word-search/
 */
 var exist = function(board, word) {
    // 回溯
    if(board.length === 0) return false
    if(word.length === 0) return true
    const row = board.length
    const col = board[0].length
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            let res = helper(board, word, i, j, 0)
            if(res) return res     
        }
    }
    return false
};
const helper = (board, word, i, j, cur) => {
    if(i < 0 || i >= board.length) return false
    if(j < 0 || j >= board[0].length) return false
    let letter = board[i][j]
    if(word[cur] !== letter) return false
    if(cur === word.length - 1) return true
    board[i][j] = null
    let temp = helper(board, word, i + 1, j, cur + 1) ||
                helper(board, word, i - 1, j, cur + 1) ||
                helper(board, word, i, j + 1, cur + 1) ||
                helper(board, word, i, j - 1, cur + 1)
    board[i][j] = letter
    return temp
}
// @lc code=end

