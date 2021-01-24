var maximumTime = function(time) {
    for(let i = 0 ; i < 5;i++){
        if(time.charAt(i) == '?') {
            if(i==0){
                if(parseInt(time.charAt(1)) >= '4'){
                    time = changeVal(time,i,'1')
                } else {
                    time = changeVal(time,i,'2')
                }
            } else if(i == 1){
                if(time.charAt(0) == '2') {
                time = changeVal(time,i,'3')
                } else {
                time = changeVal(time,i,'9')
                }
            } else if(i == 3){
                time = changeVal(time,i,'5')
            } else if(i == 4){
                time = changeVal(time,i,'9')
            }
        } 
    }
    return time
};
const changeVal = (str,pos,newVal) => {
    return str.substring(0,pos) + newVal + str.substring(pos+1)
}
