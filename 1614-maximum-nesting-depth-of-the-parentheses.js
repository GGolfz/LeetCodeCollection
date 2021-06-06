var maxDepth = function(s) {
    let m = 0
    let k = 0
    for(let i of s){
        if(i == '('){
            m+=1;
            if(m>k) k=m;
        } else if(i==')'){
            m-=1;
        }
    }
    return k;
};
