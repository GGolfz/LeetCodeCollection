var subtractProductAndSum = function(n) {
    let p = 1;
    let s = 0;
    for(let i of n.toString()){
        let tn = parseInt(i)
        p*=tn;
        s+= tn;
    }
    return p - s;
};
