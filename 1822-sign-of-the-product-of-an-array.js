var arraySign = function(nums) {
    let cur = 0;
    for(let i of nums){
        cur += i < 0 ? 1 : 0;
        if(i == 0)return 0;
    }
    return cur%2 == 0 ? 1 : -1
};
