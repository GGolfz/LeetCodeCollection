var removeOccurrences = function(s, part) {
    let ans = ''
    let chk = true;
    while(chk) {
        ans = ''
        chk = false
        for(let i = 0 ; i< s.length ;i++) {
            if(s.substring(i,i+part.length) == part) {
                i+= part.length - 1
                chk = true;
            } else {
                ans += s.charAt(i)
            }
        }
        s = ans
        if(!chk) {
            break;
        }
    }
    return ans
};