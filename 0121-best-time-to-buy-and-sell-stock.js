var maxProfit = function(prices) {
    let minVal = Number.MAX_SAFE_INTEGER;
    let maxVal = -1;
    let maxAns = 0;
    for(let i of prices){
        if(i < minVal) {
            let ans = maxVal - minVal;
            if(ans > maxAns) maxAns = ans;
            minVal = i;
            maxVal = -1;
        }
        if(i > maxVal) {
            maxVal = i;
        }
    }
    let ans = maxVal - minVal;
    if(ans > maxAns) maxAns = ans;
    return maxAns
};
