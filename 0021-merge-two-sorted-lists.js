var mergeTwoLists = function(l1, l2) {
    if(l1 != null && l2 != null) {
        let head = l1.val <= l2.val ? l1 : l2
        if(l1.val <= l2.val) {
            while(l1.next != null) {
                if(l2 != null && l2.val < l1.next.val) {
                    let temp = l1.next
                    l1.next= l2
                    l2 = l2.next
                    l1.next.next = temp
                } else {
                    l1 = l1.next
                }
            }
            l1.next = l2
        } else {
            while(l2.next != null) {
                if(l1 != null && l1.val < l2.next.val) {
                    let temp = l2.next
                    l2.next = l1
                    l1 = l1.next
                    l2.next.next = temp
                } else {
                    l2 = l2.next
                }
            }
            l2.next = l1   
        }
        return head
    }
    return l1 == null ? l2 : l1
};
