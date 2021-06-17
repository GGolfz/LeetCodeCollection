var repeatedNTimes = function(nums) {
    let occur = {};
    for(let i of nums){
        if(!(i in occur)){
            occur[i] = 0
        }
        occur[i] +=1
    }
    for(let k in occur){
        if(occur[k] == nums.length / 2){
            return k;
        }
    }
    return -1
};
