var findContentChildren = function(g, s) {
    let child = g.sort((a,b) => a-b)
    let cookie = s.sort((a,b) => a-b)
    let count = 0;
    let cookieIndex = 0;
    for(let i = 0 ; i < child.length; i++) {
        while(cookieIndex < cookie.length && cookie[cookieIndex] < child[i]) {
            cookieIndex++;
        }
        if(cookieIndex >= cookie.length) break;
        cookieIndex++;
        count++;
    }
    return count
};
