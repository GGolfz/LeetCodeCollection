var minBitFlips = function(start, goal) {
    let startText = start.toString(2)
    let goalText = goal.toString(2)
    startText = startText.padStart(30, "0")
    goalText = goalText.padStart(30, "0")
    let count = 0
    for(let i in startText) {
        if(startText.charAt(i) != goalText.charAt(i)) count++
    }
    return count
};
