var getAllElements = function(root1, root2) {
    let arr = [];
    arr.push(...getAllElementFromTree(root1))
    arr.push(...getAllElementFromTree(root2))
    arr.sort((a,b) => a-b);
    return arr
};

var getAllElementFromTree = (root) => {
    if(root == null) {
        return [];
    }
    return  [root.val,...getAllElementFromTree(root.left),...getAllElementFromTree(root.right)]
}
