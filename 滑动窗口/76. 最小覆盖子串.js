// https://leetcode.cn/problems/minimum-window-substring/

var minWindow = function(s, t) {
    let l = 0,
        r = 0
    const need = {}
    let res = ''

    for(let c of t) {
        need[c] = need[c] ? need[c] + 1 : 1
    }

    let nType = Object.keys(need).length

    while(r < s.length) {
        const c = s[r]

        if(c in need) {
            need[c]--
            if(need[c] === 0) {
                nType--
            }
        }

        while(nType === 0) {
            const newRes = s.substring(l, r + 1)

            if(!res || newRes.length < res.length) {
                res = newRes
            }

            const c2 = s[l]

            if(c2 in need) {
                need[c2]++
                if(need[c2] === 1) {
                    nType++
                }
            }

            l++
        }

        r++
    }

    return res
}
