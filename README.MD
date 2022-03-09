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
## 1. Depth First Values - Depth First Traversal
Given the root node of a binary tree, we must go deeper in the tree until we can't anymore and then we can go across the tree. 

* time complexity - O(n) - because we are going to add every node to our stack and those nodes are also going to leave the stack exactly ONCE. We are NOT double visting any of the nodes.
* space complexity - O(n) - because the only thing we stored was the stack, which is linear data structure. We are not going to put ever more that n things on the stack. 

