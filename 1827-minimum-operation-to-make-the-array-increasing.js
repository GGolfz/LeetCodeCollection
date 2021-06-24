var minOperations = function(nums) {
    let max = -1;
    let count = 0;
    for(let i = 0 ; i< nums.length;i++){
        if(nums[i] > max) {
            max = nums[i]
        } else {
            max++;
            count += max - nums[i]
            nums[i] = max
        }
    }
    return count
};
