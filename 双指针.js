// 反向双指针
// 初始化 i j
// i = 0
// j = arr.length 
// while(i <= j) {
//   处理 arr[i] arr[j]
//   移动 i j
// }
// https://leetcode.cn/problems/reverse-string/
// 
var reverseString = function(s) {
  var i = 0
  // 数组下标少 1
  var j = s.length-1
  while(i <= j) {
    // 交换 s[i] s[j]
    var temp = s[i]
    s[i] = s[j]
    s[j] = temp
    // 后移 i 前移 j
    i++
    j--
  }
  return s
}
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
// 同向双指针
// 初始化 i j
// i = 0
// j = 0
// while(j < arr.length) {
//   if(需要 arr[j]) {
//     arr[i] = arr[j]
//     // 此时 i 左边为处理好的元素
//     i++
//     j++
//   } else {
//     j++
//   }
// }
var removeDuplicates = function(nums) {
  var i = 0
  var j = 0
  while(j < nums.length) {
    // 要第一个元素和不重复的元素
    if(i == 0 || nums[j] != nums[i - 1]) {
      nums[i] = nums[j]
      // 此时 i 左边为处理好的元素
      i++
      j++
    } else {
      j++
    }
  } 
  return i
}