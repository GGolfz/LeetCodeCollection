var postorderTraversal = function(root) {
    let ans = [];
    var postorder = (tree) => {
        if(tree == null) return;
        postorder(tree.left);
        postorder(tree.right);
        ans.push(tree.val);
    }
    postorder(root)
    return ans;
};
