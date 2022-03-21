
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(12);
const c = new Node(-5);
const d = new Node(23);
const e = new Node(4);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// depth-first traversal - recursion
const maxRootToLeafPath = (root) => {
    if (root === null) return -Infinity; // base case for if the root has no left child
    if (root.left === null && root.right === null) return root.val; //base case

    // the desision we make ar every node is to choose the bigger result from the left or right
    // and then add myself to it
    const maxPathSum = Math.max(maxRootToLeafPath(root.left), maxRootToLeafPath(root.right));
    return root.val + maxPathSum;
} 

// The Math.max() function returns the largest of the zero or more numbers given as input parameters, 
// or NaN if any parameter isn't a number and can't be converted into one.