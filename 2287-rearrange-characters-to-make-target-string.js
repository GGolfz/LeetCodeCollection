var rearrangeCharacters = function(s, target) {
    let count = Infinity;
    let mapped = {};
    for(let i of s){
        if(mapped[i]){
            mapped[i] += 1
        } else {
            mapped[i] = 1
        }
    }
    let nmap = {};
    for(let i of target){
        if(nmap[i]) {
            nmap[i] += 1
        } else {
            nmap[i] = 1
        }
    }
    for(let i of Object.keys(nmap)){
        count = Math.min(Math.floor(mapped[i] / nmap[i]),count);
    }
    return isNaN(count) ? 0 : count;
};
