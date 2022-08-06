var countSegments = function(s) {
    let arr = s.split(" ")
    let count = 0
    for(let i of arr) {
        if(i.trim() != "") {
            count += 1
        }
    }
    return count
};
