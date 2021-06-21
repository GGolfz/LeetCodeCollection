var diStringMatch = function(s) {
    let count = 0;
    s=s.split('')
    for(let i in s){
        if(s[i] == 'I'){
            s[i] = count;
            count+=1
        }
    }
    s.push(count)
    count+=1
    for(let i = s.length - 1 ;i>= 0 ;i--){
        if(s[i] == 'D'){
            s[i] = count;
            count+=1
        }
    }
    return s
};
