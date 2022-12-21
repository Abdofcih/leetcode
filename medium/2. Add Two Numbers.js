/*
2. Add Two Numbers
    You are given two non-empty linked lists representing two non-negative integers.
    The digits are stored in reverse order, and each of their nodes contains a single digit. 
    Add the two numbers and return the sum as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/*
Time Complexity
    Worst case O(n) n is length of longest list
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

 var addTwoNumbers = function(l1, l2) {
        // Head of our new node that is what we will return
        let head = null;
        // tail of our new list
        let tail = null;
        // carry is the remaining value 13 => 1 and carry = 3
        let carry = 0;
        // start the loop througth tow lists
        // if one of the list has value start the loop
        while(l1!=null || l2!=null){
            // on every new loop get the carry to add to list value
            sum = carry;
            // in any loop may one of the lists reaches the end
            // so check the list does not reach the end
            if(l1 != null){
                sum = sum + l1.val;
                l1 = l1.next;
            }
            if(l2 != null){
                sum = sum + l2.val;
                l2 = l2.next;
            }
            // add the new value to our new list
            // be aware we will add on digite => sum%10
            // 13 % 10 = 3 
            // 1 is stored in carry to be added on next itration
            let newNode = new ListNode(sum%10)

            carry = Math.floor(sum/10)
            // if this is the first node
            if(tail === null){
                head = newNode;
                tail = head;
            }
            //if this is NOT the first node
            else{
                tail.next = newNode;
                tail = tail.next;
        }
 
}
// after we finished our loops 
// check if the carry has value greater then 0
// if thet is the case add the value to our new list
if(carry > 0){
 let carryNode = new ListNode(carry)
 tail.next = carryNode;
 tail = tail.next;
}
// return the head
return head;
};











// my Test
let l1n1 = new ListNode(3)
let l1n2 = new ListNode(4,l1n1)
let headofListOne = new ListNode(2,l1n2)

let l2n1 = new ListNode(4)
let l2n2 = new ListNode(6,l2n1)
let headofListTow = new ListNode(5,l2n2)





console.log(addTwoNumbers(headofListOne,headofListTow));
/* Expect 
{
    val:7
    next: {
            val:0
            next:  {
                        val:8
                        next: undefined 
                   }
         }

}

*/