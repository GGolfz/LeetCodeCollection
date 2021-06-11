var uniqueMorseRepresentations = function(words) {
    var morseList = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let wordSet = new Set()
    for(let i of words){
        let tmp = ''
        for(let j of i){
            tmp += morseList[j.charCodeAt(0) - 97]
        }
        wordSet.add(tmp)
    }
    return wordSet.size
};
