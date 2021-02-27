var longestCommonPrefix = function(strs) {
    let ans = ''
    if(strs.length >= 1){
    for(let i = 0 ; i < strs[0].length;i++){
        let t = true;
        let s = strs[0].charAt(i);
        for(let j in strs){
            if(i > strs[j].length - 1){
                t = false;
            } else if(strs[j].charAt(i) != s){
                t = false;
            }
        }
        if(t){
            ans += s;
        } else {
            break;
        }
    }
    }
    return ans
};
