class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log('a: ', a);

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// a b d e c f


// const depthFirstPrint = (root) => {
//     const stack = [root];
//     while(stack.length > 0) {
//         const curr = stack.pop();
//         console.log('curr: ', curr.val);
//         // add curr's children to the top of the stack
//         if (curr.right !== null) {
//             stack.push(curr.right);
//         }

//         if (curr.left !== null) {
//             stack.push(curr.left);
//         }
//     }
// } // O(n) time, O(n) space

const depthFirstPrint = (root) => {
    // if tree is empty
    if (root === null) return;

    console.log(root.val);
    depthFirstPrint(root.left);
    depthFirstPrint(root.right);
} // O(n) time, O(n) space




// pre-order traversal: self, left, right
// post-order traversal: left, right, self
// in-order traversal: left, self, right

// pre-order traversal
const preOrder = (root) => {
    // if tree is empty
    if (root === null) return;

    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}


//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// a b d e c f
preOrder(a)


// self, left, right
// a b d e c f


// post-order traversal
const postOrder = (root) => {
    // if tree is empty
    if (root === null) return;

    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}
// left, right, self

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// d e b f c a
postOrder(a)


// in-order traversal
const inOrder = (root) => {
    // if tree is empty
    if (root === null) return;

    inOrder(root.left);
    inOrder(root.right);
    console.log(root.val);
}


// left, self, right
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// d b e a c f
inOrder(a)