var divide = function(dividend, divisor) {
    let val = dividend /divisor;
    if(val < -Math.pow(2,31) || val >= Math.pow(2,31)) {
        return Math.pow(2,31) -1
    } else {
        if(val > 0) {
            val = Math.floor(val);
        } else {
            val = -Math.floor(-val);
        }
    }
    return val
};
