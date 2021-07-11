var preorderTraversal = function(root) {
    let ans = [];
    var preorder = (tree) => {
        if(tree == null) return;
        ans.push(tree.val);
        preorder(tree.left);
        preorder(tree.right);
    }
    preorder(root)
    return ans;
};
