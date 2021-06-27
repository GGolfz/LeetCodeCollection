var findRepeatedDnaSequences = function(s) {
    let ans = new Set()
    for(let i = 0 ; i <s.length - 9 ;i++){
        if(s.substring(i+1,s.length).indexOf(s.substring(i,i+10)) != -1) {
            ans.add(s.substring(i,i+10))
        }
    }
    return Array.from(ans);
};
