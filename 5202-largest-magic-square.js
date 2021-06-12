var largestMagicSquare = function(grid) {
    let maxSize = 0;
    for(let i = 0 ; i < grid.length;i++){
        for(let j = 0 ; j < grid[i].length;j++){
            for(let k = 0;k< Math.min(grid.length - i ,grid[i].length - j);k++){
                let sum = new Set();
                for(let m = i ; m <=i+k;m++){
                    sum.add(getRowSum(grid,m,j,j+k))
                }
                for(let m = j ; m <=j+k;m++){
                    sum.add(getColSum(grid,m,i,i+k))
                }
                sum.add(getDiagSum(grid,i,j,k+1));
                if(sum.size == 1) {
                    if(k+1 > maxSize){
                        maxSize = k+1;
                    }
                }
            }
        }
    }
    return maxSize
};
const getRowSum = (arr,row,cols,cole) => {
    let sum = 0;
    for(let i = cols;i<=cole;i++){
        sum+=arr[row][i];
    }
    return sum;
}

const getColSum = (arr,col,rows,rowe) => {
    let sum = 0;
    for(let i = rows;i<=rowe;i++){
        sum+=arr[i][col];
    }
    return sum;
}
const getDiagSum = (arr,rowe,cole,size) => {
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0 ; i < size ; i++){
        sum1 += arr[rowe+i][cole+i]
        sum2 += arr[rowe+size-i-1][cole+i]
    }
    if(sum1 == sum2) {
        return sum1;
    } else {
        return -1;
    }
}
