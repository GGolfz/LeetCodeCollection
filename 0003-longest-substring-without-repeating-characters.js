var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let count = 0;
    let chk = {};
    for(let i in s) {
        if(!(s[i] in chk) || chk[s[i]] == -1){
            count += 1;
            chk[s[i]] = i;
            if(count > max) {
                max = count
            }
        } else {
            count = i - chk[s[i]];
            for(let j in chk) {
                if(parseInt(chk[j]) < parseInt(chk[s[i]])) {
                    chk[j] = -1
                }
            }
            chk[s[i]] = i;
        }
    }
    return max
}
