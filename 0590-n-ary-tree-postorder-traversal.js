var postorder = function(root) {
    let ans = [];
    var post = (tree) => {
        if(tree == null) return;
        for(let i of tree.children){
            post(i)
        }
        ans.push(tree.val);
    }
    post(root)
    return ans;
};
