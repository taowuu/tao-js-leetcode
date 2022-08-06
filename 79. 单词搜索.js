/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
*/
var exist = function(board, word) {
    const helper = (i, j, cur) => {
        if(i >= row || i < 0) return
        if(j >= col || j < 0) return
        let letter = board[i][j]
        if(word[cur] !== letter) return false
        if(cur === word.length-1) return true
        // 当前查找的置为 null，只能使用一次
        board[i][j] = null
        let temp = helper(i+1, j, cur+1) ||
                    helper(i-1, j, cur+1) ||
                    helper(i, j+1, cur+1) ||
                    helper(i, j-1, cur+1)
        board[i][j] = letter
        // 还原，其他路径要使用
        return temp
    }
    // 
    if(board.length === 0) return false
    if(word.length ===0) return true
    // 
    const row = board.length
    const col = board[0].length
    // 
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            let res = helper(i, j, 0)
            if(res) return res
        }
    }
    return false
};
