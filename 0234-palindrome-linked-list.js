var isPalindrome = function(head) {
    let first = ''
    let second = ''
    while(head != null) {
        first = first + head.val;
        second = head.val + second;
        head = head.next;
    }
    return first == second;
};
