/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
 */
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while(left <= right) {
        let sum = numbers[left] + numbers[right]
        if(sum === target) return [left + 1, right + 1]
        else if(sum < target) left++
        else right--
    }
};