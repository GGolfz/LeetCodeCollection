var checkRecord = function(s) {
    let countAbsent = 0;
    for(let i of s){
        if(i=='A') countAbsent++;
    }
    if(countAbsent >= 2) {
        return false
    }
    if(s.indexOf("LLL") != -1) {
        return false
    }
    return true
};
