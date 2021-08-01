var addDigits = function(num) {
    while(num < 10) return num
    return addDigits(num.toString().split('').reduce((prev,cur)=> prev+parseInt(cur),0))
};
