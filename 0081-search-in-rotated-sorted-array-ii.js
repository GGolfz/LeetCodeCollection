var search = function(nums, target) {
    let first = nums[0];
    let last = nums[nums.length - 1];
    if(target >= first) {
        for(let i = 0 ; i < nums.length;i++){
            if(target == nums[i]) return true;
        }
    } else {
        for(let i = nums.length - 1 ; i >= 0 ;i--){
            if(target == nums[i]) return true;
        }
    }
    return false
};
