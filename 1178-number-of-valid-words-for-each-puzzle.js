var findNumOfValidWords = function(words, puzzles) {
    return puzzles.map(puz => {
        let wList = words.filter(w => w.includes(puz.charAt(0)))
        return wList.map(wo => {
            let wUnique = new Array(...new Set(wo))
            let length = wUnique.filter(w => puz.includes(w)).length;
            return length == wUnique.length
        }).reduce((prev,cur)=>prev+cur,0)
    })
};
