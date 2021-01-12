var singleNumber = function(nums) {
    let ans = 0;
    nums.forEach(el=>{
        if(nums.filter(x=>x==el).length == 1){
            ans= el
        }
    })
    return ans;
};
