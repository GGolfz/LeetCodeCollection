var findLucky = function(nums) {
    let ans = [];
    for(let i = 0 ; i<nums.length;i++){
        let c = 0;
        for(let j = 0; j<nums.length;j++){
            if(nums[i] == nums[j]){
                c++;
            }
        }
        if(c == nums[i]){
            ans.push(nums[i]);
        }
    }
    ans.sort((a,b)=>b-a);
    return ans[0] ?? -1;
};
