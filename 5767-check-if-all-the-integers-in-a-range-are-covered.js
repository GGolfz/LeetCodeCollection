var isCovered = function(ranges, left, right) {
    let chk = true;
    for(let i = left;i<=right;i++){
        let temp = false;
        for(let j of ranges){
            if(i>= j[0] && i<=j[1]){
                temp = true;
            }
        }
        if(temp == false){
            chk = false
            break;
        }
    }
    return chk
};
