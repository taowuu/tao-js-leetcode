// https://leetcode.cn/problems/assign-cookies/

var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let i = 0

    s.forEach(n => {
        if(n >= g[i]) {
            i++
        }
    })

    return i
}
