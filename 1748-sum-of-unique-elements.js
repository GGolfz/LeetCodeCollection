var sumOfUnique = function(nums) {
    let sum = 0
    nums.filter(n=>isUnique(nums,n)).forEach(e=>sum+=parseInt(e));
    return sum
};

var isUnique = (arr,n) => {
    return arr.filter(e=> e==n).length == 1;
}
