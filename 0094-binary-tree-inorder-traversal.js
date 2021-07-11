var inorderTraversal = function(root) {
    let ans = [];
    var inorder = (tree) => {
        if(tree == null) return;
        inorder(tree.left);
        ans.push(tree.val);
        inorder(tree.right);
    }
    inorder(root)
    return ans;
};
