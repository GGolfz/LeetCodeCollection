var countAndSay = function(n) {
    if(n == 1) {
        return "1";
    } else {
        return countAndSayN(n-1,'1')
    }
};

const countAndSayN = (n,word) => {
    if(n == 0) {
        return word;
    } else {
        return countAndSayN(n-1,numberToWord(word))
    }
}
const numberToWord = (number) => {
    let s = ''
    let w = ''
    let count = 0;
    for(let i = 0 ; i < number.length;i++){
        if(s == '') {
            s = number.charAt(i);
            count+=1;
        } else if(number.charAt(i) != s){
            w += count+ s;
            s = number.charAt(i);
            count = 1;
        } else {
            count += 1
        }
    }
    if(count != 0) {
        w += count + s;
    }
    return w;
}
