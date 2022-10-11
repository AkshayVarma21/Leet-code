/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let curr = 1;
    let prev = 1;
    let temp=0;
    for(let i = 1; i<n ; i++){
        temp =curr
        curr = curr + prev
        prev= temp
    }

    return curr;
};