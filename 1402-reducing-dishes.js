var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a,b)=>a-b);
    let s = 0;
    for(let i = 0 ; i < satisfaction.length;i++){
        let sum = 0;
        satisfaction.slice(i).forEach((e,index)=>{
            sum+= e*(index+1)
        })
        if(sum > s){
            s = sum
        }
    }
    return s;
};
