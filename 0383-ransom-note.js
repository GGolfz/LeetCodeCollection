var canConstruct = function(ransomNote, magazine) {
    let key = magazine.split("");
    for(let i of ransomNote){
        if(key.indexOf(i) != -1){
            key.splice(key.indexOf(i),1)
        } else {
            return false;
        }
    }
    return true
};
