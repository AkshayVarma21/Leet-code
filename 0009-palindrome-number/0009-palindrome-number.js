/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copyNum = x;
    let r;
    let newNum = 0;
    
    while(x>0){
        r = Math.floor(x%10)
        x = Math.floor(x/10)
        newNum = newNum*10 + r
    }

    return newNum === copyNum
};