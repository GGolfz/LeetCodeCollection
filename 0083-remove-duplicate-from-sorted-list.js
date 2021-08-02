var deleteDuplicates = function(head) {
    if(head != null){
        let ans = new ListNode(head.val,null);
        let ansHead = ans;
        let exist = [head.val];
        head = head.next;
        while(head != null) {
            if(!exist.includes(head.val)){
                ans.next = new ListNode(head.val,null);
                ans = ans.next
                exist.push(head.val)
            }
            head = head.next;
        }
        return ansHead;
    }
    return head;
};
