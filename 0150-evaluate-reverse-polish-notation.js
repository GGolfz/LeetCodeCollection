var evalRPN = function(tokens) {
    let stack = [];
    for(let i = 0 ; i < tokens.length;i++){
        if(tokens[i] == "+") {
            let last = stack.pop()
            let pvlast = stack.pop()
            stack.push(pvlast+last)
        } else if(tokens[i] == "-") {
            let last = stack.pop()
            let pvlast = stack.pop()
            stack.push(pvlast-last)  
        } else if(tokens[i] == '*') {
            let last = stack.pop()
            let pvlast = stack.pop()
            stack.push(pvlast*last)
        } else if(tokens[i] == '/') {
            let last = stack.pop()
            let pvlast = stack.pop()
            let a = pvlast/last
            if(Math.floor(a) != a){
                if(a < 0){
                    a+=1
                }
                a = Math.floor(a)
            }
            stack.push(a)
        } else {
            stack.push(parseInt(tokens[i]))
        }
     }
    return stack
};
