var findRelativeRanks = function(score) {
    let rank = [...score];
    rank.sort((a,b)=>b-a);
    let ans = [];
    for(let i of score){
        if (i == rank[0]){
            ans.push("Gold Medal")
        } else if (i == rank[1]){
            ans.push("Silver Medal")
        } else if (i == rank[2]){
            ans.push("Bronze Medal")
        } else {
            ans.push(`${rank.indexOf(i)+1}`)
        }
    }
    return ans;
};
