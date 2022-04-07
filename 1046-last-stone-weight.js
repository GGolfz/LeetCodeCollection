var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
        let sorted = stones.sort((a,b) => b-a);
        let first = stones[0];
        let second = stones[1];
        if(first == second){
            stones = stones.slice(2)
        } else {
            stones = stones.slice(1)
            stones[0] = first - stones[0]
        }
    }    
    return stones.length == 0 ? 0 : stones[0]
};
