var search = function(nums, target) {
    let start = 0; 
    let end = nums.length - 1;
    while(start <= end) {
        let pos = parseInt(start + (end - start) / 2);
        if(target > nums[pos]) {
            start = pos+1;
        } else if(target < nums[pos]){
            end = pos-1;
        } else if(target == nums[pos]){
            return pos;
        }
    }
    return -1;
};
