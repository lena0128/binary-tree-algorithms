
// We consider the first node as the front one in the queue (comes in first, leave first)
// Use the Array.shift() method to remove the first element from the array and return the removed element
//  left to right version
const breadthFirstValues = (root) => {
    if (root === null) return [];

    const result = [];
    const queue = [ root ];
    while (queue.length > 0) {
        const current = queue.shift(); // remove the front node from the queue;
        // as soon as the node leaves the queue, we can consider that as visited and add it to the result array
        result.push(current.val); // add the value of the current node to the array;
        
        if (current.left !== null) queue.push(current.left) 
        if (current.right !== null) queue.push(current.right)
    }

    return result;
}