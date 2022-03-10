// depth-first => recursive
const treeSum = (root) => {
    if (root === null) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right);
}


// breadth-first => iterative
const treeSumIteration = (root) => {
    if (root === null) return 0;
    
    const sum = 0;
    const queue = [ root ];
    while (queue.length > 0) {
       const current = queue.shift();
       sum += current.val 
       if (current.left !== null) queue.push(current.left)
       if (current.right !== null) queue.push(current.right)
    }
    return sum;
}