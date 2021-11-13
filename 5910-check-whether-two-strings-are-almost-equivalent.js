var checkAlmostEquivalent = function(word1, word2) {
    let wordMap = {};
    for(let i of word1){
        if(wordMap[i]) {
            wordMap[i] +=1
        } else{
            wordMap[i] = 1
        }
    }
    for(let i of word2){
        if(wordMap[i]){
            wordMap[i] -=1
        } else {
            wordMap[i] = -1
        }
    }
    for(let i in wordMap){
        if(wordMap[i] > 3 || wordMap[i] < -3) {
            return false
        }
    }
    return true;
};
