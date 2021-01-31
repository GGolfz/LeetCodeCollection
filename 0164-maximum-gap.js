var maximumGap = function(nums) {
    let val = nums.sort((a,b)=>a-b).map((el,index) => nums[index+1] - el).sort((a,b)=>b-a)[0] 
    return isNaN(val) ? 0 : val
};
