/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    const arrLen = nums.length;
    
    if(k > arrLen){
        k = k % arrLen;
    }
    
    const rotated = nums.splice(arrLen-k, k)
    
    nums.unshift(...rotated)
};