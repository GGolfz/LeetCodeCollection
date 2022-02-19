var countPairs = function(nums, k) {
    let count = {};
    for(let i in nums) {
        if(nums[i] in count) {
            count[nums[i]].push(i);
        } else {
            count[nums[i]] = [i]
        }
    }
    let ans = 0
    for(let i in count) {
        for(let a = 0 ; a < count[i].length ; a++){
            for(let b = a+1 ; b<count[i].length; b++){
                if((parseInt(count[i][a])*parseInt(count[i][b]))%k == 0){
                    ans++;
                }
            }
        }
    }
    return ans;
};
