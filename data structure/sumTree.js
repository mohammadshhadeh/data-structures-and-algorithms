class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      3
//    /   \
//   2     7
//  / \     \
// 4   -2     5

// const sumTree = (root) => {
//     const stack = [root];

//     let sum = 0;
//     while(stack.length > 0) {
//         const curr = stack.pop();

//         sum += curr.val;

//         // add curr's children to the top of the stack
//         if (curr.right !== null) {
//             stack.push(curr.right);
//         }

//         if (curr.left !== null) {
//             stack.push(curr.left);
//         }
//     }

//     return sum;
// }

const sumTree = (root) => {
    if (root === null) return 0;
    return sumTree(root.left) + root.val + sumTree(root.right);
} // O(n) time, O(n) space

sumTree(a); // 19
console.log('sumTree(a): ', sumTree(a));
