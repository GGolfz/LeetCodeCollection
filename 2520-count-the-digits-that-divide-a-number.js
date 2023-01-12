var countDigits = function(num) {
    let data = []
    let map = {}
    for(let i = 1; i <= 9 ; i++){
        data.push(num % i == 0)
        map[i.toString()] = 0
    }
    for(let i of num.toString()){
        map[i] += 1
    }
    let count = 0;
    for(let i = 1 ; i <= 9; i++) {
        if(data[i-1]) count += map[i.toString()]
    }
    return count
};
