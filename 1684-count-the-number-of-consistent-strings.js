var countConsistentStrings = function(allowed, words) {
    let count = 0
    words.forEach((w)=>{
        let ch = true;
        for(let i of w){
            if(allowed.indexOf(i) == -1){
                ch = false
                break;
            }
        }
        count += ch ? 1 : 0
    })
    return count
};
