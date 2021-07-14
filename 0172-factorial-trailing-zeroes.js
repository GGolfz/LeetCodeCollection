var trailingZeroes = function(n) {
    let count2 = 0;
    let count5 = 0;
    for(let i = 1; i<=n;i++){
        let temp = i;
        while(temp % 2 == 0){
            count2+=1
            temp/=2;
        }
        temp = i
        while(temp % 5 == 0){
            count5+=1
            temp/=5;
        }
    }
    return Math.min(count2,count5);
};
