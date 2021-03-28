var isValid = function(s) {
    let stack = []
    for(let i of s){
        if(i == '['){
            stack.push(']')
        } else if (i == '{'){
            stack.push('}')
        } else if (i == '('){
            stack.push(')')
        }
        else if (["}",")","]"].indexOf(i) != -1){
            if(stack[stack.length - 1] == i){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length == 0;
};
