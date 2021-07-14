var reverseBits = function(n) {
    let nStr = n.toString(2).split('').reverse().join('')
    for(let i = nStr.length;i<32;i++){
        nStr += '0'
    }
    return parseInt(nStr,2)
};
