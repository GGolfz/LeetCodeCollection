var findMin = function(nums) {
    let first = nums[0];
    let last = nums[nums.length - 1];
    let min = 5001;
    if(last < first) {
        min = last;
        for(let i = nums.length - 1 ; i >= 0 ; i--) {
            if(nums[i] <= min) {
                min = nums[i];
            } else {
                return min;
            }
        }
    } else {
        min = first;
        for(let i = 0 ; i < nums.length ; i++) {
            if(nums[i] <= min) {
                min = nums[i];
            } else {
                return min;
            }
        }
    }
    return min;
};
