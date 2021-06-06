var replaceDigits = function(s) {
    let ans = ''
    for(let i = 1 ; i < s.length; i+=2){
        ans += s[i-1];
        ans += String.fromCharCode(s[i-1].charCodeAt(0) + parseInt(s[i]));
    }
    if(s.length % 2 !=0){
        ans += s[s.length - 1]
    }
    return ans;
};
