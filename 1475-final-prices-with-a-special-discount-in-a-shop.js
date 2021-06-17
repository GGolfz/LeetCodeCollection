var finalPrices = function(prices) {
    let sum = [];
    for(let i = 0 ; i < prices.length;i++){
        let min = 0;
        for(let j = i+1 ; j < prices.length;j++){
            if(prices[j]<=prices[i]){
                min = prices[j];
                break;
            }
        }
        sum.push(prices[i] - min);
    }
    return sum
};
