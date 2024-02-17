var findNthDigit = function(n) {
    // 1 digits (1-9) => 9 (9)
    // 2 digits (10 - 99) => 90 (180)
    // 3 digits (100 - 999) => 900 (2700)
    // 4 digits (1000 - 9999) => 9000 (36000)
    // 5 digits (10000 - 99999) => 900000 (450000)
    let sum = 0;
    let prevSum = 0;
    let x = 1;
    while(n > sum) {
        prevSum = sum;
        sum += 9 * x * Math.pow(10, x - 1)
        x += 1
    }
    let number = Math.pow(10, x-2) + Math.ceil((n - prevSum) / (x-1)) - 1
    let indexOfNumber = (n - prevSum - 1) % (x-1) 
    let realIndex = indexOfNumber >= 0 ? indexOfNumber : indexOfNumber + (x-1)
    return (number).toString().charAt(realIndex)
};
