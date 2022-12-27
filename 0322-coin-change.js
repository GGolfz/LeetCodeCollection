var coinChange = function(coins, amount) {
    let min = [0,...new Array(amount).fill(Infinity)];
    for(let c of coins){
        for(let j =  0; j < min.length; j++){
            if(c <= j){
                min[j] = Math.min(min[j], 1 + min[j-c]);
            }
        }
    };
    return min[amount] != Infinity ? min[amount] : -1; 
};
