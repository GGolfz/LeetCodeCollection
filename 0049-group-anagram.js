var groupAnagrams = function(strs) {
    let map = {}
    for(let i of strs){
        let temp = i.split('').sort().join('')
        if(temp in map) {
        map[temp].push(i)
        } else {
            map[temp] = [i]
        }
    }
    let ans = []
    for(let i in map){
        ans.push(map[i])
    }
    return ans
};
