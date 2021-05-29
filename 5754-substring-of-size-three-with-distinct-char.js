var countGoodSubstrings = function(s) {
    let substr = []
    let ans = []
    for(let i = 0 ;i<s.length - 2 ;i++){
        substr.push(s.substring(i,i+3))
    }
    for(let i of substr){
        let data = new Set();
        for(let j of i){
            data.add(j);
        }
        if(data.size == 3){
            ans.push(i)
        }
    }
    return ans.length
};


