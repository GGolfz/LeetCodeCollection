var repeatedCharacter = function(s) {
    for(let i in s) {
        if(s.indexOf(s.charAt(i)) != i) return s.charAt(i)
    }
    return ""
};
