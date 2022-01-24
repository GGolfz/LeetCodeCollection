var capitalizeTitle = function(title) {
    return title.split(" ").map(t => t.length <= 2 ? t.toLowerCase() : (t.substring(0,1).toUpperCase() + t.substring(1).toLowerCase())).join(" ")   
};
