
// we are going to treat the null node as infinity 

// breadth-first iterative 
const treeMinValue = (root) => {
    const queue = [ root ];

    let smallest = Infinity;

    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val < smallest) smallest = current.val; 

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return smallest
}

//The shift() method removes the first element from an array and returns that removed element. 
// This method changes the length of the array.

// depth-first traversal 
const treeMinValueRecursion = (root) => {
    if (root === null) return Infinity;

    const leftMin = treeMinValueRecursion(current.left);
    const rightMin = treeMinValueRecursion(current.right);

    return Math.min(root.val, leftMin, rightMin);
}