var twoEggDrop = function(n) {
    let x = Math.floor(Math.pow(2*n,0.5));
    for(let i = x ; i <= n ; i++){
        if(i*(i+1)/2 >= n){
            return i;
        }
    }
    return 1;
};
