var bitwiseComplement = function(N) {
    let ans = Math.pow(2,Math.floor(Math.log(N)/Math.log(2)) + 1) -1 - N;
    return ans < 0 ? 1 : ans ;
};
