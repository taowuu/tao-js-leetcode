// https://leetcode.cn/problems/number-of-recent-calls/

var RecentCounter = function() {
    // 初始化计数器，请求数为 0
    // 先进后出使用队列
    this.queue = []
}

RecentCounter.prototype.ping = function(t) {
    // 入队一个请求
    this.queue.push(t)
    // 队头在 3000ms 外出队
    while(this.q[0] < t - 3000) {
        this.queue.shift()
    }
    // 最终队列长度为
    // 在 [t-3000, t] 内发生的请求数
    return this.queue.length
}
