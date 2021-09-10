var pivotIndex = function(nums) {
    const sum = (arr) => arr.length >= 0 && arr.reduce((prev,cur) => prev+cur,0);
    for(let i = 0 ; i<nums.length ;i++) {
        let left =nums.slice(0,i);
        let right = nums.slice(i+1,nums.length)
        if(sum(left) == sum(right)){
            return i
        }
    }
    return -1;
};
