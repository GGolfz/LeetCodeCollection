var minimumRecolors = function(blocks, k) {
    let min = k;
    for(let i = 0 ; i <= blocks.length - k ; i++) {
        let c = 0;
        for(let j = 0 ; j < k ; j++) {
            if(blocks.charAt(i+j) == "W"){
                c++;
            }
        }
        if(c < min) min = c
    }
    return min;
};
