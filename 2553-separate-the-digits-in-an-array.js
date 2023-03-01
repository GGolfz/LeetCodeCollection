var separateDigits = function(nums) {
    return nums.reduce((p,c) => [...p,...c.toString().split('')], []).map(n => parseInt(n))
};
