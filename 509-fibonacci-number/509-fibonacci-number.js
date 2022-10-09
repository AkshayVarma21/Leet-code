/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    let prev= 0;
    let curr=1;
    let sum=0
    
    for(let i=2;i<=n;i++){
        
        sum=prev+curr;
        prev=curr;
        curr=sum;
        
        
    }
    if(n !== 1)
    return sum;
    else
        if(n)
        return curr
};