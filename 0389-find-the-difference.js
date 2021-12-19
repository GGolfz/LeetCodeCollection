var findTheDifference = function(s, t) {
    let count = {};
    for(let i of s){
        if(i in count) {
            count[i] += 1
        } else {
            count[i] = 1
        }
    }
    for(let i of t) {
        if(i in count) {
            count[i] -= 1
        } else {
            count[i] = -1
        }
    }
    for(let i in count) {
        if(count[i] != 0) return i
    }
};
