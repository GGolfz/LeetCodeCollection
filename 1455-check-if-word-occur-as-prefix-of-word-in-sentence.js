var isPrefixOfWord = function(sentence, searchWord) {
    let wordList = sentence.split(" ");
    for(let i in wordList){
        if(wordList[i].startsWith(searchWord)){
            return parseInt(i) + 1;
        }
    }
    return -1;
};
