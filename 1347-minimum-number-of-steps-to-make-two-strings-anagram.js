var minSteps = function(s, t) {
    let d = {};
    for(let i of s){
        if(!(i in d)) d[i] = 0
        d[i] +=1
    }
    for(let i of t){
        if(!(i in d)) d[i] = 0
        d[i] -=1
    }
    let count = 0;
    for(let i in d){
        count += Math.abs(d[i])
    }
    return count / 2
};
