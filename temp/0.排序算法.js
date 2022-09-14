// 冒泡
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                // 存下后方的小数
                var temp = arr[j+1];
                // 后方小数变为大数
                arr[j+1] = arr[j];
                // 前方大数变为小数
                // 最终从小到大
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// 选择排序
function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        // 初始化 i 为最小值下标
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                // 更新 i 之后的最小值下标
                minIndex = j;
            }
        }
        temp = arr[i];
        // i 处更新为最小值
        arr[i] = arr[minIndex];
        // 找到的下标处把 i 换过去
        arr[minIndex] = temp;
    }
    return arr;
} 
// 插入排序
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        // 当前值小于前一个值
        // 前一个值后移
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        // 当前值大于前一个值
        // 安放在前一个值后面
        // 最终从小到大
        arr[preIndex + 1] = current;
    }
    return arr;
}
// 快速排序
function quickSort(arr, left, right) {
    if(right <= left) return
    var pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
}
function partition(arr, left ,right) {
    // 标杆位置放在最后
    var pivot = right
    // 统计小于标杆的元素个数
    // counter 之前都小于标杆
    var counter = left
    for (var i = left; i < right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, counter)
            counter++
        }       
    }
    swap(arr, pivot, counter)
    return counter
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var nums = [5,1,1,2,0,0]
console.log(nums)
quickSort(nums, 0, 5)
console.log(nums)
// 
// 归并排序
function mergeSort(arr, left, right) {
    if(right <= left) return
    var mid = Math.floor((left + right) / 2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)
    merge(arr, left, mid, right)
}
function merge(arr, left, mid, right) {
    var temp  = new Array(right - left + 1)
    var i = left
    var j = mid + 1
    // 记录 temp 填入个数
    var k = 0
    while (i <= mid && j <= right) {
        // 把 i j 较小者放入 temp
        temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
    } 
    // 把剩余 i j 合并进 temp
    while (i <= mid) temp[k++] = arr[i++]
    while (j <= right) temp[k++] = arr[j++] 
    // 把 temp 搬回 arr
    for(var p = 0; p < temp.length; p++) {
        arr[left + p] = temp[p]
    }
}
var nums = [5,1,1,2,0,0]
console.log(nums)
mergeSort(nums, 0, 5)
console.log(nums)
// 
// 堆排序
// 优先队列
// 插入 logn 取值 O(1)
// 
// 计数排序
// 利用数组下标的有序性
// 找出原数组数据作为新数组下标，并存入个数
// 遍历新数组并按照计数个数输出
// 缺点：数据必须是整数，数据量不能过大
// 
// 桶排序
// 把数据按照最高位放入桶
// 对每个桶排序
// 最后把每个桶拼接
// 
// 基数排序
// 把数据按低位到高位排序