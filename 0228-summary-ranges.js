var summaryRanges = function(nums) {
    let ans = []
    if(nums.length == 0) return []
    let start = nums[0]
    for(let i = 1 ; i < nums.length ; i++){
        if(nums[i] == nums[i-1] + 1) continue;
        if(nums[i-1] == start) {
            ans.push(`${start}`)
        } else {
            ans.push(`${start}->${nums[i - 1]}`)
        }
        start = nums[i]
    }
    if(nums[nums.length - 1] == start) {
        ans.push(`${start}`)
    } else {
        ans.push(`${start}->${nums[nums.length - 1]}`)
    }    
    return ans
};
