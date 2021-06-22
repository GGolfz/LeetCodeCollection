var heightChecker = function(heights) {
    let count = 0;
    expected = [...heights].sort((a,b) => a-b)
    for(let i in heights){
        if(heights[i] != expected[i]) count += 1
    }
    return count;
};
