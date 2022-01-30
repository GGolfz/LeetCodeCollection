var maxScoreIndices = function(nums) {
    let c0 = {};
    let c1 = {};
    c0[0] = 0;
    c1[nums.length] = 0;
    for(let i = 1 ; i <= nums.length ; i++){
        if(nums[i-1] == 0){
            c0[i] = c0[i-1] + 1
        } else {
            c0[i] = c0[i-1]
        }
    }
    for(let i = nums.length ;i > 0 ; i--){
        if(nums[i-1] == 1){
            c1[i-1] = c1[i] + 1
        } else {
            c1[i-1] = c1[i]
        }
    }
    let sum = []
    for(let i in c0) {
        sum[i] = c0[i] + c1[i]
    }
    let max = Math.max(...sum);
    let maxIndex = []
    for(let i in sum){
        if(sum[i] == max){
            maxIndex.push(i)
        }
    }
    return maxIndex
};
