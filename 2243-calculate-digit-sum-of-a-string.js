var digitSum = function(s, k) {
    if(s.length <= k) {
        return s
    }
    let str = ''
    for(let i = 0 ; i< s.length ;i+=k) {
        let sum = 0
        for(let j = 0 ; j < k;j++){
            if(i+j < s.length) sum += parseInt(s.charAt(i+j))
        }
        str += sum
    }
    return digitSum(str,k)
};
