var grayCode = function(n) {
    let arr = [0,1]
    for(let i = 1 ; i < n;i++) {
        for(let j= arr.length-1;j>=0;j--){
            arr.push(Math.pow(2,i)+arr[j])
        }
    }
    return arr
};
