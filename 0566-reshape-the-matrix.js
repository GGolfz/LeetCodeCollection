var flatten = (mat) => {
    let ans = []
    for(let i = 0 ; i<mat.length ; i++){
        for(let j = 0 ; j < mat[i].length ;j++){
            ans.push(mat[i][j])
        }    
    }
    return ans;
}

var matrixReshape = function(mat, r, c) {
    let flat = flatten(mat); 
    if(flat.length != r*c)return mat;
    let ans = []
    let counter = 0;
    for(let i = 0 ; i < r ; i++){
        let temp = []
        for(let j = 0 ; j < c;j++){
            temp.push(flat[counter])
            counter += 1;
        }
        ans.push(temp);
    }
    return ans;
};
