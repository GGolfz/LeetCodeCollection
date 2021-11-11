var minStartValue = function(nums) {
    let minValue = 0;
    let current = 0;
    for(let i = 0 ; i < nums.length ; i++) {
        current += nums[i];
        if(current < minValue) minValue = current;
    }
    return -minValue + 1
};
