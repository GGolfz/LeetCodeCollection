var countPrimes = function(n) {
    if(n < 2){
        return 0;
    } else {
        let count = 0;
        for(let i = 2;i<n;i++){
            if(isPrimes(i)){
                count += 1;
            }
        }
        return count;
    }
};
const isPrimes = (n) => {
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}
