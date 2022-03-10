// breadth-first iterative solution
// the steps:
// (1) the root a is put on the queue; a left the queue and marked as the current; 
// (2) at this point I am gonna check if the current value is the same as the target value;
// (3) if not a's children b and c are put on the queue;
// (4) b left the queue and marked as current; b is checked; b's children d and e are put on the queue;
// (5) and keep going...

const treeIncludesBreadthFirst = (root, target) => {
    if (root === null) return false;

    const queue = [ root ];
    while (queue.length > 0) {
        const current = queue.shift();
        if(current.val === target) return true
        
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);         
    }
    return false
}


// depth-first recursive solution
// quite elegant solution
// 
const treeIncludesBreadthFirstRecursion = (root, target) => {
   if (root === null) return false; // base case
   if (root.val === target) return true;
   
   return treeIncludesBreadthFirstRecursion(root.left, target) || treeIncludesBreadthFirstRecursion(root.right, target);
}