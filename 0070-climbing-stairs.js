var climbStairs = (n) => {
    if(n<=2){
        return n;
    }
    a = 1;
    b = 2;
    c = 0;
    for(let i = 3 ;i<=n;i++){
        c = a+b;
        a = b;
        b = c;
    }
    return c;
};
