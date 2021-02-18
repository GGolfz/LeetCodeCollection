var firstUniqChar = function(s) {
    let obj = {};
    for(let i = 0 ; i < s.length;i++){
        if(Object.keys(obj).indexOf(s[i]) == -1){
            obj[s[i]] = 1;
        } else {
            obj[s[i]] += 1;
        }
    }
    for(let e of Object.keys(obj)){
        if(obj[e] == 1){
            return s.indexOf(e)
        }
    }
    return -1;
};
