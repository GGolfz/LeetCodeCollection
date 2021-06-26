var canBeIncreasing = function(nums) {
    for(let i = 0 ;i< nums.length;i++) {
        let copy = [...nums]
        copy.splice(i,1)
        let chk =true
        for(let i = 1 ; i<copy.length;i++){
            if(copy[i] <= copy[i-1]) {
                chk = false;
                break
            }
        }
        if(chk) return true
    }
    return false
};
