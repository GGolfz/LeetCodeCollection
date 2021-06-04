var isSumEqual = function(firstWord, secondWord, targetWord) {
    return wordToNum(firstWord) + wordToNum(secondWord) == wordToNum(targetWord)
};
var wordToNum = (word) => {
    return parseInt(word.split('').map((e)=>e.charCodeAt(0)-97).join(''));
}
