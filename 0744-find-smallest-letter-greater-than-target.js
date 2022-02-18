var nextGreatestLetter = function(letters, target) {
    letters = letters.sort((a,b) => b.toString().charCodeAt(0) - a.toString().charCodeAt(0));
    for(let i in letters){
        if(letters[i] <= target){
            return letters[letters.length - 1]
        } else if (i != letters.length - 1 && letters[parseInt(i)+1] <= target){
            return letters[i]
        }
    }
    return letters[letters.length - 1]
};
