var sortColors = function(nums) {
    for(let i = 0 ; i < nums.length;i++) {
        let min = i
        for(let j = i+1 ; j < nums.length;j++) {
            if(nums[j] < nums[min]) min = j;
        }
        let temp = nums[min];
        nums[min] = nums[i];
        nums[i] = temp
    }
};
