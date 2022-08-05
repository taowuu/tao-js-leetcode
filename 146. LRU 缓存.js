/**
 * @param {number} capacity
 * https://leetcode.cn/problems/lru-cache/
 */
var LRUCache = function(capacity) {
    this.cache = new Map()
    this.max = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)) {
        let temp = this.cache.get(key)
        // 常用数据放置末尾
        this.cache.delete(key)
        this.cache.set(key, temp)
        // 
        return temp
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)) {
        // 删除前方数据
        this.cache.delete(key)
    } else if(this.cache.size >= this.max) {
        // 容量满删除头部
        this.cache.delete(this.cache.keys().next().value)
    }
    // 常用数据放置末尾
    this.cache.set(key, value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */