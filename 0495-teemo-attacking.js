var findPoisonedDuration = function(timeSeries, duration) {
    let answer = 0
    let temp = -1
    for(let i = 0 ; i < timeSeries.length;i++) {
        if(timeSeries[i] <= temp) {
            answer += (timeSeries[i] + duration - 1) - temp
            temp = timeSeries[i] + duration - 1
        } else {
            answer += duration
            temp = timeSeries[i] + duration - 1
        }
    }
    return answer;
};
