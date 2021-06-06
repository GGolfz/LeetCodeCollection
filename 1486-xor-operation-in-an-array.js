var xorOperation = function(n, start) {
    let ans = 0
    for(let i = 0 ; i<n;i++){
        ans = ans ^ start
        start += 2
    }
    return ans;
};
