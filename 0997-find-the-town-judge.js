var findJudge = function(n, trust) {
    if(n == 1) return 1
    let data = {}
    let chk = {}
    for(let i of trust) {
        if(data[i[1]]) {
            data[i[1]] += 1
        } else {
            data[i[1]] = 1
        }
        chk[i[0]] = true
    }
    for(let k in data) {
        if(data[k] == n - 1) {
            if(chk[k] == undefined) return k
        } 
    }
    return -1; 
};
