var reverseVowels = function(s) {
    let str = "";
    let vowelList = [];
    let vowels = ['A','E','I','O','U','a','e','i','o','u']
    for(let i = 0 ; i < s.length ; i++) {
        if(vowels.includes(s.charAt(i))) {
            str += "_"
            vowelList.push(s.charAt(i));
        } else {
            str += s.charAt(i);
        }
    }
    for(let i = 0 ; i < str.length ; i++ ) {
        if(str.charAt(i) == "_") str = str.substring(0,i) + vowelList.pop() + str.substring(i+1);
    }
    return str
};
