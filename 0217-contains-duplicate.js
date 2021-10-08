var containsDuplicate = function(nums) {
    let has = {};
    for(let i of nums) {
        if(i.toString() in has) {
            return true;
        }
        has[i] = 1
    }
    return false;
};
