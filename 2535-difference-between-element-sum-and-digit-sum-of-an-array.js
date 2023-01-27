var differenceOfSum = function(nums) {
    const sumArr = (arr) => arr.reduce((p,c) => p + parseInt(c), 0)
    let sumA = 0
    let sum = 0
    for(let i of nums){
        sum += i;
        sumA += sumArr(i.toString().split(''))
    }
    return Math.abs(sumA - sum)
};
