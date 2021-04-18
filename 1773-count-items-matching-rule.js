var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for(let i of items){
        switch(ruleKey){
            case "type":
                count += i[0] == ruleValue ? 1 : 0
                break;
            case "color":
                count += i[1] == ruleValue ? 1 : 0
                break;
            case "name":
                count += i[2] == ruleValue ? 1 : 0
                break;
        }
    }
    return count;
};
