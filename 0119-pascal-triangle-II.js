var getRow = function(rowIndex) {
    let res =[]
    for(let i = 0 ;i<=rowIndex;i++){
        let n = rowIndex - i;
        let k = i;
        if(n>k){
            let temp = k;
            k=n;
            n=temp;
        }
        let ans = 1;
        for(let j = rowIndex;j> k;j--){
            ans*=j;
        }
        for(let j = n ;j>1;j--){
            ans/=j;
        }
        res.push(ans)
    }
    return res;
};
