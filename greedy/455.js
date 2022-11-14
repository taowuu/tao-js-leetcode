// https://leetcode.cn/problems/assign-cookies/

var findContentChildren = function(g, s) {
    // 胃口
    g.sort((a, b) => a - b)
    // 饼干大小
    s.sort((a, b) => a - b)

    let i = 0
    // 小饼干分给胃口最小的孩子
    s.forEach(n => {
        if(n >= g[i]) {
            i++
        }
    })

    return i
}
