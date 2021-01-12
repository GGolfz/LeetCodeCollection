var sortArrayByParityII = function(A) {
    let odd = []
    let even = []
    A.sort((a,b)=>a-b)
    A.map(e => {
        if(e%2==0){
            even.push(e)
        } else {
            odd.push(e)
        }
    })
    let ans = []
    let ceven = 0
    let codd = 0
    A.map((e,index) => {
        if(index % 2 == 0){
            ans.push(even[ceven])
            ceven +=1;
        } else {
            ans.push(odd[codd])
            codd +=1;
        }
    })
    return ans;
};
