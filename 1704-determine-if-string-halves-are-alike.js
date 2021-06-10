var halvesAreAlike = function(s) {
    let count = 0;
    for(let i = 0 ; i<s.length/2;i++){
        count+=isVowel(s[i]) ? 1 :0;
        count-=isVowel(s[i+s.length/2]) ? 1:0;
    }
    return count==0
};

var isVowel = (c) => {
    return ["a","e","i","o","u"].indexOf(c.toLowerCase()) != -1
}
