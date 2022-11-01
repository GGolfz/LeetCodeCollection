var mostFrequentEven = function(nums) {
    let data = {};
    let maxVal = 0;
    let maxKey = -1;
    for(let i of nums){
        if(i%2==0){
            if(!(i in data)) {
                data[i] = 0
            }
            data[i] += 1
            if(data[i] > maxVal || (data[i] == maxVal && i < maxKey)) {
                maxVal = data[i];
                maxKey = i;
            }
        }
    }
    return maxKey
};
