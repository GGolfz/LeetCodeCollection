var findErrorNums = function(nums) {
    let count = new Array(nums.length).fill(0);
    for(let i of nums){
        count[parseInt(i) -1 ] += 1;
    }
    let miss = 0;
    let dup = 0;
    for(let i in count){
        if(count[i] == 2) dup = parseInt(i)+1;
        if(count[i] == 0) miss = parseInt(i)+1;
    }
    return [dup,miss]
};
