var findRestaurant = function(list1, list2) {
    let ind = {};
    for(let i = 0; i<list1.length;i++){
        if(!ind[list1[i]]){
            ind[list1[i]] = [i]
        }
    }
    for(let i = 0; i<list2.length;i++){
        if(ind[list2[i]] && ind[list2[i]].length == 1){
            ind[list2[i]].push(i)
        }
    }
    let sumKey = {}
    Object.keys(ind).map(k => {
        if(ind[k].length == 2){
            sumKey[k] = ind[k][0] + ind[k][1]
        }
    })
    let minValue = Math.min(...Object.values(sumKey))
    let answer = []
    Object.keys(sumKey).map(k => {
        if(sumKey[k] == minValue){
            answer.push(k)
        }
    })
    return answer
};
