/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/powx-n/
 */
 var myPow = function(x, n) {
    // 二分幂 分治
    // even n * n
    // odd n * n * x
    // 全局变量
    let N = n
    // 返回答案，从递归来
    return N > 0 ? helper(x, N) : 1.0 / helper(x, -N)
};

var helper = (x, N) => {
    // 递归终止
    if(N == 0) return 1.0
    // 当前层无操作
    // 向子问题要答案
    let y = helper(x, Math.floor(N / 2))
    // 无需清除当前层变量
    // 把答案传给父问题
    return N % 2 == 0 ? y * y : y * y * x
}