var largestOddNumber = function(num) {
    let str = '';
    let start = false;
    for(let i = num.length -1. ;i>=0 ;i--){
        if(!start && parseInt(num[i]) % 2 == 1){
            start = true;
        }
        if(start) str = num[i] + str
    }
    return str
};
