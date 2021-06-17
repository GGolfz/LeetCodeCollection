var generateTheString = function(n) {
    let ans = ''
    if(n % 2 == 0){
        if((n/2)%2 == 0){
            ans += 'cd'
            for(let i = 0 ; i<(n-2)/2;i++){
                ans += 'ab'
            }
        } else {
            for(let i = 0 ; i<n/2;i++){
                ans += 'ab'
            }
        }
    } else {
        for(let i = 0 ; i<n;i++){
            ans += 'a'
        }
    }
    return ans
};
