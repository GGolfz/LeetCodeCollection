var deleteDuplicates = function(head) {
    let exist = [];
    let removed = [];
    while(head != null) {
        if(!exist.includes(head.val) && !removed.includes(head.val)){
            exist.push(head.val)
        } else if(exist.includes(head.val)){
            exist.splice(exist.indexOf(head.val),1)
            removed.push(head.val)
        }
        console.log(exist)
        head = head.next;
    }
    if(exist.length == 0) return null;
    let ans = new ListNode(exist[0],null);
    let ansHead =ans;
    for(let i = 1;i<exist.length;i++){
        ans.next = new ListNode(exist[i],null);
        ans = ans.next;
    }
    return ansHead;
};
