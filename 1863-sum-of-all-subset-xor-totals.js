var subsetXORSum = function(nums) {
    let sum = 0;
    nums.reduce((subsets, value) => subsets.concat(subsets.map(set => [value,...set])),[[]]).forEach((e)=>{
        let s = 0;
        for(let i of e) {
            s = s ^ i;
        }
        sum += s
    });
    return sum
};
