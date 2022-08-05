const preproccess = (word) => {
    return word.split("").sort((a,b) => a.localeCompare(b)).join("")
}
var removeAnagrams = function(words) {
    let ans = []
    for(let i = words.length - 1 ; i > 0 ; i--) {
        if(!(preproccess(words[i]) === preproccess(words[i - 1]))) {
            ans.push(words[i])
        }
    }
    ans.push(words[0])
    return ans.reverse()
};
