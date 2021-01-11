var twoSum = function(nums, target) {
    const answer = []
    for(let index in nums) {
        var new_target = target - nums[index];
        var target_index = nums.findIndex((n) => n == new_target);
        if(target_index != -1 && index != target_index){
            answer.push(index)
            answer.push(target_index)
            break;
        }
    }
    return answer.sort((a,b)=>a-b);
};
