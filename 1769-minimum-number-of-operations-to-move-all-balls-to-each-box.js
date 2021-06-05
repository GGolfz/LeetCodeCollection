var minOperations = function(boxes) {
    let ans = []
    for(let i = 0 ; i< boxes.length ;i++){
        ans[i] = 0;
    }
    for(let i = 0 ; i < boxes.length;i++){
        for(let j = 0; j < boxes.length;j++){
            ans[i] += boxes[j] * Math.abs(i-j)
        }
    }
    return ans
};
