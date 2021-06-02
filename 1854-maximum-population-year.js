var maximumPopulation = function(logs) {
    let data ={};
    for(let i of logs){
        for(let j = i[0] ; j<i[1];j++){
            if(data[j] == null){
                data[j] = 0;
            }
            data[j]+=1
        }
    }
    let tmpArr = []
    for(let i in data){
        tmpArr.push([i,data[i]])
    }
    tmpArr.sort((a,b)=> b[1]-a[1])
    console.log(tmpArr);
    return tmpArr[0][0];
};
