var addToArrayForm = function(num, k) {
    let l = Math.max(num.length, k.toString().length)
    let arr = []
    let r = 0
    for(let i = 0; i < l ; i++) {
        let val = k % 10 + r
        if(num[num.length - i - 1]){
            val += num[num.length - i - 1]
        }
        arr.push(val % 10)
        r = Math.floor(val / 10)
        k = Math.floor(k / 10)
    }
    if(r > 0) {
        arr.push(r)
    }
    return arr.reverse()
};
