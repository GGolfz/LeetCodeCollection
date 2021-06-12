// Pass 18 / 70 Test case (Time Limit Exceeded)
var minOperationsToFlip = function(expression) {
    let postexpression = inToPost(expression)
    let cur = customEval(postexpression)
    let target = cur == '0' ? '1' : '0'
    return rep(postexpression,0,0,target)
};

var customEval = (s2) => {
    let num1=0;
	let num2=0;
	let result=0.0;
	let s = [];
		for(let i = 0 ;i<s2.length;i++){
			if(s2.charAt(i) == "|"){
					num1 = s.pop();
					num2 = s.pop();
					result = parseInt(num1) | parseInt(num2);
					s.push(""+result);
			}
			else if(s2.charAt(i) == "&"){
					num1 = s.pop();
					num2 = s.pop();
					result = parseInt(num1) & parseInt(num2);
					s.push(""+result);
			}
			else{
					s.push(""+s2.charAt(i));
			}
		}
		let sum = s.pop();
		return parseInt(sum);
}
var prec = (c) => {
    if(c == '|' || c == '&'){
        return 1
    }
    return -1
}
var inToPost = (exp) => {
        var result = ""; 
		
		var stack = []; 
		
		for (let i = 0; i<exp.length; ++i) 
		{ 
			let c = exp.charAt(i); 
			
			if (c == '1' || c=='0') {
				result += c; 
            }
			else if (c == '(') {
				stack.push(c); 
            }
			else if (c == ')') 
			{  
				while (!(stack.length == 0) && stack[stack.length - 1] != '(') 
					result += stack.pop()
				
				if (!(stack.length == 0) && stack[stack.length - 1] != '(') {
					return "Invalid Expression"			 
                }
				else {
					stack.pop(); 
                }
			} 
			else
			{ 
				while (!(stack.length == 0) && prec(c) <= prec(stack[stack.length - 1])){ 
					if(stack[stack.length - 1] == '(') 
						return "Invalid Expression"; 
					result += stack.pop(); 
			} 
				stack.push(c); 
			} 
	
		} 
	
		while (!(stack.length == 0)){ 
			if(stack[stack.length - 1] == '(') 
				return "Invalid Expression"; 
			result += stack.pop(); 
		} 
		return result; 
}

var rep = (exp,index,cur,target) => {
    let newexp = exp;
    if(exp[index] == "1"){
        newexp = exp.substr(0, index) + "0" + exp.substr(index + 1);
    } else if(exp[index] == "0"){
        newexp = exp.substr(0, index) + "1" + exp.substr(index + 1);
    } else if(exp[index] == '&'){
        newexp = exp.substr(0, index) + "|" + exp.substr(index + 1);
    } else if(exp[index] == '|'){
        newexp = exp.substr(0, index) + "&" + exp.substr(index + 1);
    }
    if(customEval(newexp) == target){
        return cur+1;
    }
    if(index > exp.length) {
        return Number.MAX_VALUE
    }
    return Math.min(rep(exp,index+1,cur,target),rep(newexp,index+1,cur+1,target));
}
