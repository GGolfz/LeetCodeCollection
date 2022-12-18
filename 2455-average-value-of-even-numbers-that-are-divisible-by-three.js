var averageValue = function(nums) {
    let filteredNum = nums.filter((n) => n % 2 == 0 && n % 3 == 0)
    if(filteredNum.length == 0) return 0
    return Math.floor(filteredNum.reduce((a,b) => a+b,0) / filteredNum.length)
};
