var plusOne = function(digits) {
   for(let i =1 ;i<=digits.length;i++){
       digits[digits.length - i] +=1;
       if(digits[digits.length - i] < 10){
           break;
       } else {
           digits[digits.length -i] %=10
           if(digits.length - i == 0){
               digits = [0,...digits]
           }
       }
   }
    return digits
};
