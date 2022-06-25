var countAsterisks = function(s) {
    let found = false;
    let count = 0;
    for(let i of s){
        if(i == '|') {
            found = !found
        }
        else if(!found && i == "*") {
            count ++
        }
    }
    return count
};
