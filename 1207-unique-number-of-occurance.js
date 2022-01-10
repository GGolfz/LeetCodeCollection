var uniqueOccurrences = function(arr) {
    let map = {};
    for(let i of arr){
        if(map[i]){
            map[i] += 1
        } else {
            map[i] = 1
        }
    }
    let nums = new Set();
    let count = new Set();
    for(let i in map){
        nums.add(i);
        count.add(map[i])
    }
    return nums.size === count.size
};
