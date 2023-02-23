var moveZeroes = function(nums) {
    let index = 0;
    while(index < nums.length) {
        if(nums[index] == 0) {
            let nonZeroIndex = index + 1;
            while(nonZeroIndex < nums.length) {
                if(nums[nonZeroIndex] != 0) break
                nonZeroIndex += 1;
            }
            if(nonZeroIndex >= nums.length) break
            nums[index] = nums[nonZeroIndex]
            nums[nonZeroIndex] = 0;
        }
        index++;
    }
};
