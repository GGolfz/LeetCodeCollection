var baseNeg2 = function(n) {
    let str = ""
    if(n == 0) return "0"
    while(n!= 0) {
        str = Math.abs((n%-2)) + str;
        n = Math.ceil(n / -2);
    }
    return str;
};
