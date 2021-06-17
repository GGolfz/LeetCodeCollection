// Search way
var maxProduct = function(nums) {
    let max = 0;
    for(let i = 0 ; i <nums.length;i++){
        for(let j = i+1 ; j < nums.length;j++){
            let val = (nums[i]-1)*(nums[j]-1)
            if(val > max){
                max = val
            }
        }
    }
    return max
};
// Sort way
var maxProduct = function(nums) {
    let max = 0;
    nums.sort((a,b)=> b-a)
    return (nums[0]-1) * (nums[1]-1)
};
