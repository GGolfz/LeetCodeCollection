var removeDuplicates = function(s) {
    while(true) {
        let temp = true;
        let str = ''
        for(let i=1;i<s.length;i++){
            if(s[i] == s[i-1]){
                temp = false;
                i+=1
            } else {
                str+=s[i-1]
            }
            if(i == s.length - 1){
                str+=s[i]
            }
        }
        if(temp) break
        s = str
    }
    return s
};
