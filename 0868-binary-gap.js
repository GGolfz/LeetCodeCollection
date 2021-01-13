var binaryGap = function(n) {
    let count = 0;
    let max = 0;
    let found = false;
    n = (n >>> 0).toString(2);
    for(let i of n){
        if(i == '1'){
            if(found){
                count = count+1;
                if(count >max){
                    max = count
                }
                count = 0
            }
            found = true;
        } else {
            count+=1;
        }   
    }
    return max
};
