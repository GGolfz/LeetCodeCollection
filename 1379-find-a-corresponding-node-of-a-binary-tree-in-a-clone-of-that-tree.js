var getTargetCopy = function(original, cloned, target) {
    if(cloned == null) return null;
    if(cloned.val == target.val) return cloned;
    return getTargetCopy(original,cloned.left,target) || getTargetCopy(original,cloned.right,target);    
};

