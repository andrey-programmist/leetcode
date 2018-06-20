//https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function(l1, l2) {
    const process = (a, b, additional)=>{
        
        a.val += additional;
        let sum = a.val;
        if(!!b){
            sum += b.val;
        }
        a.val = sum%10;
        const add = (sum-a.val)/10;
        
        if(a.next === null){
            if(b===null || b.next === null) {
                if(add>0){
                    a.next = {
                        val: add,
                        next: null
                    };
                }
            } else {
                a.next = b.next;
                process(a.next, null, add);
            }
        } else {
            if(b===null){
                process(a.next, null, add);
            } else{
                process(a.next, b.next, add);
            }
               
        }
    };
    process(l1, l2, 0);
    return l1;
    
};