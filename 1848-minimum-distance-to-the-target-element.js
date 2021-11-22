var getMinDistance = function(nums, target, start) {
    let i = 0;
    while(((start + i) < nums.length) || ((start - i) >= 0)) {
        // check left
        if(start - i >= 0 && nums[start-i] == target) {
            return i;
        } 
        // check right
        else if(start + i < nums.length && nums[start+i] == target) {
            return i;
        }
        i++;
    }
};
