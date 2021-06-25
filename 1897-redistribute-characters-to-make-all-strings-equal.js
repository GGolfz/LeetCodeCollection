var makeEqual = function(words) {
    let wordList = [];
    let wordDict = {};
    for(let i of words){
        wordList.push(...i.split(''))
    }
    for(let i of wordList) {
        if(!(i in wordDict)) {
            wordDict[i] = 0
        }
        wordDict[i] += 1
    }
    let s = new Set();
    for(let j in wordDict){
        s.add(wordDict[j])
    }
    let chk = true
    for(let i of Array.from(s)){
        if(parseInt(i) % words.length != 0) chk = false
    } 
    return chk
};
