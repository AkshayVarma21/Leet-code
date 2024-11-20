/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    
    nums.sort((a,b)=>b-a);
    
    console.log(nums)
    
    if(nums.length >= k){
        return nums[k-1]
    }
};