/**
 * @param {character[][]} grid
 * @return {number}
 * https://leetcode.cn/problems/number-of-islands/
 */
 var numIslands = function(grid) {
    if(grid == null) return 0
    let res = 0
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') { 
                sink(i, j, grid)
                res += 1
            }
        }
    }
    return res
};

const sink = (i, j, g) => {
   if(!(i >= 0 && i < g.length) || !(j >= 0 && j < g[0].length) || g[i][j] === '0') return
    // 岛屿下沉
    g[i][j] = '0'
    sink(i, j - 1, g)
    sink(i + 1, j, g)
    sink(i - 1, j, g)
    sink(i, j + 1, g)
}
