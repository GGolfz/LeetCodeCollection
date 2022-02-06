var findMaxConsecutiveOnes = function(nums) {
    let count = nums[0] == 1 ? 1 : 0;
    let max = count;
    for(let i = 1; i < nums.length ; i++) {
        if(nums[i] == 1) {
            count ++;
            if(count > max) max = count
        } else {
            count = 0;
        }
    }
    return max;
};
