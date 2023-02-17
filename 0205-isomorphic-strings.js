var isIsomorphic = function(s, t) {
    let sARR = []
    let sMap = {}
    let tARR = []
    let tMap = {}
    for(let i of s){
        if(sMap[i] == undefined) {
            sMap[i] = Object.keys(sMap).length + 1
        }
        sARR.push(sMap[i])
    }
    for(let i of t){
        if(tMap[i] == undefined) {
            tMap[i] = Object.keys(tMap).length + 1
        }
        tARR.push(tMap[i])
    }
    return sARR.join(",") === tARR.join(",")
};
