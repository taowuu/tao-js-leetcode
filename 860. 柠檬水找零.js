/**
 * @param {number[]} bills
 * @return {boolean}
 * https://leetcode.cn/problems/lemonade-change/
 */
var lemonadeChange = function(bills) {
    let five = 0
    let ten = 0
    for(let i = 0; i < bills.length; i++) {
        if(bills[i] === 5) five += 1
        if(bills[i] === 10) {
            if(five > 0) {
                five -= 1
                ten += 1
            } else {
                return false
            }
        } 
        if(bills[i] === 20) {
            if(ten > 0 && five > 0) {
                ten -= 1
                five -= 1
            } else if(five > 2) {
                five -= 3
            } else {
                return false
            }
        } 
    }
    return true
};