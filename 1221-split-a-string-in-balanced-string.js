var balancedStringSplit = function(s) {
    let count = 0;
    let ans = 0;
    for(let i = 0 ; i<s.length;i++){
        if(s[i] == 'R'){
            count +=1
        }
        if(s[i] == 'L'){
            count -=1
        }
        if(count ==0){
            ans +=1;
        }
    }
    return ans
};
