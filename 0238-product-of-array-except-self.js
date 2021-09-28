var productExceptSelf = function(nums) {
    let zero = 0;
    let product = nums.reduce((prev,cur) => cur == 0 ? (zero++,prev):prev * cur,1)
    return nums.map(e=> e == 0 ? (zero == 1 ? product : 0) : (zero>0 ? 0 : product/e));
};
