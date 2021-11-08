var checkPerfectNumber = function(num) {
    if(num <= 0) return true;
    let sum = 0;
    let divisor = [];
    for(let i = 1; i <= Math.sqrt(num); i++) {
        if(num%i == 0){
            sum+= i;
            divisor.push(i)
            if(i != num/i) {
                sum+= num/i;
            divisor.push(num/i)
            }
        }
    }
    return (sum - num) == num;
};
