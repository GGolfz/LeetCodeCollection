var restoreString = function(s, indices) {
    let ans = Array(s.length);
    for(let i in indices){
        ans[indices[i]] = s[i];
    }
    return ans.join('')
};
