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

// The call stack behavior gives the same type of ordering
const depthFirstValues = (root) => {
    if (root === null) return []; // base value

    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);

    return [ root.val, ...leftValues, ...rightValues ]; 
}
