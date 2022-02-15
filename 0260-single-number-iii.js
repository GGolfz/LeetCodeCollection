var singleNumber = function(nums) {
    let map = {}
    for(let i of nums){
        if(i in map){
            map[i] += 1
        } else {
            map[i] = 1
        }
    }
    let ans = []
    for(let i in map){
        if(map[i] == 1){
            ans.push(i)
        }
    }
    return ans;
};
