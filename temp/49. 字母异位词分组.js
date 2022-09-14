/**
 * @param {string[]} strs
 * @return {string[][]}
 * https://leetcode.cn/problems/group-anagrams/
 */
 var groupAnagrams = function(strs) {
    const map = new Map()
    for(let str of strs) {
        // strs 转化为数组，排序
        let arr = Array.from(str)
        arr.sort()
        // 使用 toString 判断是否异位词
        let key = arr.toString()
        // list 保存每组异位词
        let list = map.get(key) ? map.get(key) : new Array()
        list.push(str)
        // 更新分组
        map.set(key, list)
    }
    return Array.from(map.values())
};
