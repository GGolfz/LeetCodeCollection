var mergeAlternately = function(word1, word2) {
    let str = ''
    for(let i = 0 ; i<Math.max(word1.length,word2.length);i++){
        if(i<word1.length){
            str+=word1[i]
        }
        if(i<word2.length){
            str+=word2[i]
        }
    }
    return str
};
