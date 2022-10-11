/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    let runningTotal = [];
    runningTotal[0] = nums[0];
    runningTotal[1] = Math.max(nums[0],nums[1])
    for(let i=2;i<nums.length;i++){
    
        runningTotal[i]=Math.max(runningTotal[i-1],runningTotal[i-2]+nums[i])
        
    }
    return runningTotal[nums.length-1]
};