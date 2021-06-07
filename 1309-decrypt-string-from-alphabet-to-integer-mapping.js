var freqAlphabets = function(s) {
    let arr = []
    for(let i = 0 ; i<s.length;i++){
        if(i+2 < s.length && s[i+2] == '#'){
            arr.push(s[i]+s[i+1])
            i+=2
        } else {
            arr.push(s[i])
        }
    }
    let ans =''
    for(let i of arr) {
        ans += String.fromCharCode(96+parseInt(i))
    }
    return ans
};
