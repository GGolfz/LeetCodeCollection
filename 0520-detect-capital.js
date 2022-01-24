var detectCapitalUse = function(word) {
    return word.toUpperCase() === word || word.toLowerCase() === word || (word.substring(0,1).toUpperCase() === word.substring(0,1) && word.substring(1).toLowerCase() === word.substring(1))
};
