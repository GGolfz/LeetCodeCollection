var sortArrayByParity = function(nums) {
    let odd=[];
    let even=[];
    for(let i of nums){
        i%2 == 0 ? even.push(i) : odd.push(i)
    }
    return [...even,...odd]
};
