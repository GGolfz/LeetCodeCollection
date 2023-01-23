var alternateDigitSum = function(n) {
    let sum = 0;
    let c = 1;
    for(let i of n.toString()){
        sum+= parseInt(i) * ((c++) % 2 == 0 ? -1 : 1)
    }
    return sum
};
