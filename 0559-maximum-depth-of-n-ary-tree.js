var maxDepth = function(root) {
    if(root == null) return 0;
    let ans = [0];
    for(let i of root.children){
        ans.push(maxDepth(i))
    }
    return 1 + Math.max(...ans);
};
