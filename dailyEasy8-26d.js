function Node(val){
  this.val = val
  this.next = null
}

var mergeTwoLists = function(l1, l2) {
let l3 = new Node(null)
let prev = l3

while(l1 !== null && l2 !== null){
   if(l1.val <= l2.val){
       prev.next = l1
       l1 = l1.next
   } else{
       prev.next = l2
       l2 = l2.next
   }
   prev = prev.next
}
  
if(l1 === null){prev.next = l2}
if(l2 === null){prev.next = l1}

return l3.next
}
