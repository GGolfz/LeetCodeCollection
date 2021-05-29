var minPairSum = function(nums) {
    nums.sort((a,b) => a-b)
    let data = []
    for(let i = 0 ; i<nums.length/2; i++){
        data.push(nums[i] + nums[nums.length - i - 1])
    }
    return Math.max(...data)
};

console.log(minPairSum([3,5,2,3]))
