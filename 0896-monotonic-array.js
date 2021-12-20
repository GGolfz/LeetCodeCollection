var isMonotonic = function(nums) {
    let n = [...nums]
    let inc = [...nums.sort((a,b) => a-b)]
    let dec = [...nums.sort((a,b) => b-a)]
    let c1 = true
    let c2 = true
    for(let i = 0 ; i < nums.length ; i++) {
        if(n[i] != inc[i]) c1 = false
        if(n[i] != dec[i]) c2 = false
    }
    return c1 || c2
};
