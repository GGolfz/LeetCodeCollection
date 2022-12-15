var majorityElement = function(nums) {
    let count = {};
    let ans = new Set();
    let thres = Math.floor(nums.length / 3)
    for(let i of nums) {
        if(!count[i]) count[i] = 0;
        count[i] += 1;
        if(count[i] > thres) {
            ans.add(i);
        }
    }
    return [...ans]
};
