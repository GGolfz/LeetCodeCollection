var findTheArrayConcVal = function(nums) {
    let left = 0;
    let right = nums.length - 1
    let ans = 0
    while(left <= right) {
        ans += (left == right) ? nums[left] : parseInt(`${nums[left]}${nums[right]}`)
        left++; right--;
    }
    return ans
};
