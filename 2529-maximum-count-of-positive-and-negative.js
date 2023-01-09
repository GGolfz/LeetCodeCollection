var maximumCount = function(nums) {
    let c = {pos: 0, neg: 0, zero: 0}
    nums.forEach((n) => c[n>0 ? "pos" : (n < 0 ? "neg" : "zero")]++)
    return Math.max(c.pos, c.neg)
};
