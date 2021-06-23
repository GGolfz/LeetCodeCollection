var addTwoNumbers = function(l1, l2) {
    let answer = new ListNode(0);
    let ptl = answer;
    let carry = 0;
    while(ptl!= null && l1 != null && l2 != null){
        let sum = l1.val + l2.val + carry;
        ptl.val = sum%10;
        if(sum >= 10) {
            carry = Math.floor(sum / 10); 
        } else {
            carry = 0;
        }
        if(!(l1.next == null && l2.next == null)) {
            ptl.next = new ListNode(0);
        } else if (carry != 0) {
            ptl.next = new ListNode(carry);
        }
        ptl = ptl.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while(ptl!= null && l1 != null) {
        let sum = l1.val + carry;
        ptl.val = sum%10;
        if(sum >= 10) {
            carry = Math.floor(sum / 10); 
        } else {
            carry = 0;
        }
        if(l1.next != null) {
            ptl.next = new ListNode(0);
        } else if (carry != 0) {
            ptl.next = new ListNode(carry);
        }
        ptl = ptl.next;
        l1 = l1.next;
    }
    while(ptl!= null && l2 != null) {
        let sum = l2.val + carry;
        ptl.val = sum%10;
        if(sum >= 10) {
            carry = Math.floor(sum / 10); 
        } else {
            carry = 0;
        }
        if(l2.next != null) {
            ptl.next = new ListNode(0);
        } else if (carry != 0) {
            ptl.next = new ListNode(carry);
        }
        ptl = ptl.next;
        l2 = l2.next;
    }
    
    return answer;
};
