var isPerfectSquare = function(num) {
    let sqv = Math.sqrt(num)
    return parseInt(Math.floor(sqv)) == parseInt(sqv) && parseInt(Math.ceil(sqv)) == parseInt(sqv)
};
