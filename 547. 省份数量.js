/**
 * @param {number[][]} isConnected
 * @return {number}
 * https://leetcode.cn/problems/number-of-provinces/
 */
var findCircleNum = function(isConnected) {
    class UnionFind {
        constructor(n) {
            this.count = n
            this.parent = new Array(n)
            for(let i = 0; i < n; i++) {
                this.parent[i] = i
            }
        }
        find(p) {
            while(p !== this.parent[p]) {
                this.parent[p] = this.parent[this.parent[p]]
                p = this.parent[p]
            }
            return p
        }
        union(p, q) {
            let rootP = this.find(p)
            let rootQ = this.find(q)
            if(rootP === rootQ) return
            this.parent[rootP] = rootQ
            this.count--
        }
    }
    let n = isConnected.length
    const uf = new UnionFind(n)
    for(let j = 0; j < n - 1; j++) {
        for(let k = j + 1; k < n; k++) {
            if(isConnected[j][k] === 1) {
                uf.union(j, k)
            }
        }
    }
    return uf.count
}