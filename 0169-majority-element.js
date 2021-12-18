var majorityElement = function(nums) {
    let count = {};
    for(let i of nums) {
        if(!(i in count)){
            count[i] = 0;
        }
        count[i] += 1;
        if(count[i] >= Math.ceil(nums.length / 2.0)) {
            return i;
        }
    }
};
