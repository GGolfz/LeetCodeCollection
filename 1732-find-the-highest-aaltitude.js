var largestAltitude = function(gain) {
    let sum =0;
    let max = 0;
    for(let i of gain){
        sum += parseInt(i);
        if(sum>max) max = sum;
    }
    return max;
};
