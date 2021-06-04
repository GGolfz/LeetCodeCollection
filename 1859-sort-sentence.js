var sortSentence = function(s) {
    let data = s.split(' ');
    data.sort((a,b) => a[a.length - 1] - b[b.length - 1])  
    return data.map((e)=> e.substring(0,e.length - 1)).join(' ')
};
