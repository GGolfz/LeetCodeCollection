var letterCombinations = function(digits) {
    let ans = []
    let map = {
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z']
    }
    let recursion = (index,str) => {
        if(str.length == digits.length){
            ans.push(str);
            return;
        }
        for(let i of map[digits[index]]){
            recursion(index+1,str+i);
        }
    }
    if(digits.length != 0) recursion(0,'')
    return ans;
};

