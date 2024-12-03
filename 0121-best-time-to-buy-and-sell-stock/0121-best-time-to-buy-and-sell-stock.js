/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let i = 0;  
    let maxProfit = 0; 

    for(let j=1; j<prices.length;j++){
        let profit = prices[j] - prices[i]
        
        maxProfit = Math.max(profit, maxProfit)
        
        if(prices[j]<prices[i]){
            i=j
        }
    }

    return maxProfit;
};