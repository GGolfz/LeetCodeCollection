var thirdMax = function(nums) {
    let n = Array.from(new Set(nums)).sort((a,b) => b-a)
    return n.length >= 3 ? n[2] : n[0]
};
