var isAnagram = function(s, t) {
    let arr = []
    let chk = true
    for(let i of s){
        arr.push(i)
    }
    for(let i of t){
        let ind = arr.indexOf(i)
        if(ind != -1){
            arr.splice(ind,1)
        } else {
            chk=false;
            break;
        }
    }
    return chk && arr.length == 0;
};
