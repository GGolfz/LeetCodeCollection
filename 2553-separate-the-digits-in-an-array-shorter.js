var separateDigits = function(nums) {
    return nums.join('').split('').map(n => parseInt(n))
};
