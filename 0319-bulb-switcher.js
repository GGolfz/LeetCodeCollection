var bulbSwitch = function(n) {
    let count = 0;
    for(let i = 1 ; i <= n ; i++){
        if(parseInt(Math.sqrt(i)) == Math.sqrt(i)){
            count++;
        }
    }
    return count;
};

