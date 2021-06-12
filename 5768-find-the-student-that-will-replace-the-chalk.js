var chalkReplacer = function(chalk, k) {
    let cur = 0;
    let sum = 0;
    for(let i of chalk){
        sum+=parseInt(i)
    }
    k%=sum;
    while(k > 0) {
        if(k<chalk[cur]){
            break;
        }
        k-=chalk[cur]
        cur+=1;
        cur %= chalk.length
    }
    return cur;
};
