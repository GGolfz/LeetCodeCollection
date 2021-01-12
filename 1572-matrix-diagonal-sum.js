var diagonalSum = function(mat) {
    let sums = 0;
    for(let i = 0 ;i<mat.length;i++){
        sums+= mat[i][i];
        sums+= mat[i][mat.length-i-1];
    } 
    if(mat.length % 2 == 1){
        let cen = parseInt((mat.length - 1)/2);
        sums -= mat[cen][cen];
    } 
    return sums
};
