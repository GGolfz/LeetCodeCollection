var levelOrder = function(root) {
    let ans = [];
    var level = (tree,lv) => {
        if(tree == null) return;
        if(ans.length == lv) ans.push([])
        ans[lv].push(tree.val);
        level(tree.left,lv+1)
        level(tree.right,lv+1)
    }
    level(root,0)
    return ans;
};
