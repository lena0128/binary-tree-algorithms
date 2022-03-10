# Binary Tree (二叉树)
A binary tree is a tree data structure in which each node has at most two （0， 1， 2）children, which are referred to as the left child and the right child. We use parent and child relationship when describing the relationship among nodes within a tree. 

## Three Criteria  
- (1). at most 2 children per node
- (2). exactly 1 root which means a single node that has no parent
- (3). exactly 1 path between root and any node
- note: we consider no nodes an empty tree (still a binary tree)

<img src="./binary tree.jpg" alt="parent and child relationship" />

* root node - a node that has no parent.
* leaf node - a node that has no children.

### Linear Data Structure
A linear data structure has data elements connected to each other so that elements are arranged in a sequential manner and each element is connected to the element in front of it and behind it.


# Binary Tree Algorithms
## 1. Depth First Values - Stack Data Structure
Given the root node of a binary tree, write a function - depthFirstValues - that should return an array containing all values of the tree in depth-first order.

### What is Depth-first Search(深度优先搜索)?
Depth-first search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node and explores as far as possible along each branch before backtracking.

### Big O
* n = # of nodes
* time complexity - O(n) - because we are going to add every node to our stack and those nodes are also going to leave the stack exactly ONCE. We are NOT double visting any of the nodes.
* space complexity - O(n) - because the only thing we stored was the stack, which is linear data structure. We are not going to put ever more that n things on the stack. 

## 2. Breath First Values - Queue Data Structure
Given the root node of a binary tree, write a breadthFirstValues function that should return an array containing all values of the tree in breadth-first order.

### What is Breadth-first Search(广度优先搜索)?
Breadth-first search is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. 

### Big O
* n = # of nodes
* time complexity - O(n) - because we are going to add every node to our queue and those nodes are also going to leave the queue exactly ONCE. We are NOT double visting any of the nodes. Note that this time complexity assumes that we have a maximally effient queue that has O of one add and remove operations.
* space complexity - O(n) - because the only thing we stored was the queue, which is linear data structure. We are not going to put ever more that n things to the queue. 

## 3. Tree Includes Problem
Given a binary tree as well as a target value to look for, write a function that returns a boolean value. Try to solve this problem using both breadth-first and depth-first search.

### Big O
* n = # of nodes
* time complexity - O(n) - because we are going to add every node to our queue and those nodes are also going to leave the queue exactly ONCE. We are NOT double visting any of the nodes. Note that this time complexity assumes that we have a maximally effient queue that has O of one add and remove operations.
* space complexity - O(n) - because the only thing we stored was the queue, which is linear data structure. We are not going to put ever more that n things to the queue. 

## 4. Tree Sum Problem
Given a root of binary tree within which the values are going to be numbers , write a function to calculate the sum. 
I am going to use the depth-first traversal to solve this problem. Remember that the depth-first traversal relies on a stack.

### Big O
* n = # of nodes
* time complexity - O(n)
* space complexity - O(n)