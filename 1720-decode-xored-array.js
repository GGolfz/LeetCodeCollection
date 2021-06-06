var decode = function(encoded, first) {
    let ans = [first]
    for(let i in encoded){
        ans.push(ans[i] ^ encoded[i])
    }
    return ans
};
