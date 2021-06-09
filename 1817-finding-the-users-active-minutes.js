var findingUsersActiveMinutes = function(logs, k) {
    let ans = Array(k).fill(0);
    let users = {};
    for(let i of logs){
        if(!(i[0] in users)){
            users[i[0]] = new Set();
        }
        users[i[0]].add(i[1])
    }
    for(let i in users){
        ans[users[i].size - 1] +=1;
    }
    return ans;
};
