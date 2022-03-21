class Node {
    constructor(val){
        this.val = val;
        this.left = null; // by default a node does not have a left child
        this.right = null; // by default a node does not have a right child
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// The iterative solution relies on creating a stack (an array)
// consider the END of the array to represent the TOP of the stack
// use array.push() to add an element to the end of the array 
// use array.pop() to remove an element from the end of the array
const depthFirstValue = (root) => {
    if (root === null) return [];

    const result = [];
    const stack = [ root ];
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);
        
        // left traverse first
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return result;
}