var findShortestSubArray = function(nums) {
    const count = {}
    let max = 0
    let degree = nums.length
    let c = 0
    for(let i of nums){
        if(count[i]) {
            count[i].value += 1
            if(count[i].value > max || (count[i].value == max && c - count[i].found + 1 < degree)) {
                degree = c - count[i].found + 1
                max = count[i].value
            }
        } else {
            count[i] = {
                found: c,
                value: 1
            }
            if(max < 1) {
                degree = 1
            }
        }
        c+=1;
    }
    return degree
};
