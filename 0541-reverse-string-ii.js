var reverseStr = function(s, k) {
    let ans = ''
    for(let i = 0 ; i<s.length;i++){
        if(i%(2*k) == 0){
            let temp = s.substring(i,i+k).split('');
            temp.reverse();
            ans += temp.join('')
            i += k-1
        } else {
            ans += s.charAt(i);
        }
    }
    return ans;
};
