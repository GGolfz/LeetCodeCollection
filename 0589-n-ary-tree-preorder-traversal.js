var preorder = function(root) {
    let ans = [];
    var pre = (tree) => {
        if(tree == null) return;
        ans.push(tree.val);
        for(let i of tree.children){
            pre(i)
        }
    }
    pre(root)
    return ans;
};
