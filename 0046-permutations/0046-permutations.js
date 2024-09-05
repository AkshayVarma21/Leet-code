/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    let res = []
    let n = nums.length;
    
    function helper(i){
        if(i === nums.length-1){
            res.push([...nums])
             return
        }
        
        for(let j=i; j<n ;j++){
            [nums[i],nums[j]] = [nums[j],nums[i]]
            helper(i+1);
          [nums[j],nums[i]] = [nums[i],nums[j]]
        }
    }
    
    helper(0)
    
    return res
};
