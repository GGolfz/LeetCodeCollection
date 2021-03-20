var constructRectangle = function(area) {
    let temp = 1;
    for(let i = 1; i<=Math.sqrt(area);i++){
        if(area%i == 0 ){
            temp = i
        }
    }
    return [parseInt(area/temp),parseInt(temp)]
};
