var containsNearbyDuplicate = function(nums, k) {
    let has = {};
    for(let i in nums) {
        if(nums[i] in has && Math.abs(i - has[nums[i]]) <= k) {
            return true;
        }
        has[nums[i]] = i 
    }
    return false;
};
