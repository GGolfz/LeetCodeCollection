var dominantIndex = function(nums) {
    let temp = [...nums]
    temp.sort((a,b)=>b-a)
    if(temp.length >=2 && temp[0] >= 2*temp[1]){
        return nums.indexOf(temp[0])
    } else if(temp.length < 2){
        return 0
    }
    return -1
};
