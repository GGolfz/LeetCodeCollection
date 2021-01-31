var findMaxAverage = function(nums, k) {
    let max = -100000000;
    for(let i = 0 ;i<=nums.length-k;i++){
        let val =0;
        for(let j = 0 ;j<k;j++){
            val += nums[i+j];
        }
        val = (val)/k
        if(val > max){
            max = val;
        }
    }
    return max;
};
