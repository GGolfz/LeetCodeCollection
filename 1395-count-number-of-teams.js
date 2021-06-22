var numTeams = function(rating) {
    let validCount = 0;
    for(let i = 0 ; i< rating.length;i++){
        for(let j = i+1;j<rating.length;j++){
            for(let k = j+1;k<rating.length;k++){
                if(rating[i] < rating[j] && rating[j] < rating[k]) validCount+=1
                if(rating[i] > rating[j] && rating[j] > rating[k]) validCount+=1
            }
        }
    }
    return validCount
};
