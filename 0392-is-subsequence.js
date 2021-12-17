var isSubsequence = function(s, t) {
    let check = true;
    let index = 0;
    for(let i of s) {
        if(t.substring(index).indexOf(i) != -1) {
            index = index + t.substring(index).indexOf(i) + 1
        } else {
            check = false;
            break;
        }
    }
    return check;
};
