var tribonacci = function(n) {
    if(n == 0) return 0
    if(n == 1) return 1
    if(n == 2) return 1
    let ans = [0,1,1]
    for(let i = 3; i<= n ;i++) {
        ans.push(ans[i-3] + ans[i-2] + ans[i-1])
    }
    return ans[n]
};
