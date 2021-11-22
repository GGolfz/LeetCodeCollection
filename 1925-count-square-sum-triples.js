var countTriples = function(n) {
    let count = 0;
    for(let i = 1 ; i <= n ; i++ ){
        for(let j = i+1; j <= n ;j++){
            if(Number.isInteger(Math.sqrt(i*i+j*j)) && Math.sqrt(i*i+j*j) <= n) count+=2;
        }
    }
    return count;
};
