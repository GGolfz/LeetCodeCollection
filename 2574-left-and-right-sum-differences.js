var leftRigthDifference = function(nums) {
    let sum = nums.reduce((p,c) => p+c,0)
    let lSum = 0
    let ans = []
    nums.forEach((n) => {
        let rSum = sum - n - lSum
        ans.push(Math.abs(lSum - rSum))
        lSum += n;
    })
    return ans;
};
