var countPrefixes = function(words, s) {
    let count = 0
    for(let i of words){
        if(s.startsWith(i)){
            count+=1;
        }
    }
    return count;
};
