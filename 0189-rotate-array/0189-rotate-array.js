/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const arrLen = nums.length;
    if(k>arrLen){
       k = k%arrLen
    }
    rev(nums, 0,arrLen-1)
    rev(nums, 0,k-1)
     rev(nums, k,arrLen-1)
}

const rev = (nums, start, end)=>{

    let temp;
    while(start<end){
          temp = nums[start]
          nums[start] = nums[end]
          nums[end] = temp
          start++;
          end--;
          }
    
}