var divisorSubstrings = function(num, k) {
    let c=0
    for(let i = 0;i<=num.toString().length-k;i++){
        let n1 = parseInt(num.toString().substring(i,i+k))
        c += num % n1 == 0 ? 1 : 0
    }
    return c
};
