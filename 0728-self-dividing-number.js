var selfDividingNumbers = function(left, right) {
  let temp =[]
  for(let i = left;i<= right;i++){
      if(check(i)){
          temp.push(i)
      }
  }  
    return temp
};

const check = (num) => {
    for(let i of num.toString()){
    if(num % parseInt(i) != 0) {
        return false
    }
    }
    return true
}
