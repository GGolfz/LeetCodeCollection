var reverse = function(x) {
    let pre = 1;
    if(x < 0){
        x = -x;
        pre = -1;
    }
    let val = pre*parseInt(x.toString().split('').reverse().join('')) 
    return val > 2147483648 ? 0 : val < -2147483647 ? 0 : val
};
