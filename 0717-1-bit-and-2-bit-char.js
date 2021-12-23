var isOneBitCharacter = function(bits) {
    for(let i = 0 ; i< bits.length;i++){
        if(bits[i] == 0){
            continue
        } else if(bits[i] == 1) {
            if(i < bits.length - 2) {
                i += 1
                continue
            } else {
                return false
            }
        }
    }
    return true
};
