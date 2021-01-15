var sumOddLengthSubarrays = function(arr) {
  let maxSize =arr.length;
  let ans = 0
  for(let i = 1 ; i<= maxSize;i+=2){
      for(let j = 0 ; j < i;j++){
          for(let k = 0;k<=maxSize-i;k++){
              ans += arr[j+k]
          }
      }
  }
  return ans
};
