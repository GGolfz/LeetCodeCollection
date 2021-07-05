var countPoints = function(points, queries) {
    let ans = [];
    for(let j = 0 ; j <queries.length;j++){
        let count = 0
        for(let i = 0 ; i< points.length;i++){
            let dx = queries[j][0]-points[i][0]
            let dy = queries[j][1]-points[i][1]
            let r = queries[j][2]
            if((dx*dx) + (dy*dy) <= r*r){
                count+=1
            }
        }
        ans.push(count)
    }
    return ans  
};
