var removeOuterParentheses = function(s) {
    let c = 0;
    let ans = '';
    for(let i of s){
        if(i == '('){
            c+=1
        }
        if(c > 1) {
            ans += i;
        }
        if ( i == ')'){
            c-=1
        }
    }
    return ans;
};
