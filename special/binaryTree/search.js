class TreeNode{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// 构造一个二叉树
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(root);

// 前序遍历
// root -> left -> right
// 同样要考虑递归的顺序
function preOrder(root) {
  let number = []

  function order(node) {
    if (node === null) {
      return;
    }

    // 在递归之前完成操作，前序
    number.push(node.val);

    order(node.left);
    order(node.right);
  }

  order(root);

  return number;
}

console.log(preOrder(root));

// 后续遍历
// left -> right -> root
// 考虑遍历操作在递归之后，也就是等到函数出栈的时候才执行我们要的操作

function postOrder(root) {
  const number = [];

  function order(node) {
    if (node === null) return;

    order(node.left);
    order(node.right)
    
    number.push(node.val);
  }

  order(root);

  return number;
}

console.log(postOrder(root));

// 中序遍历
// left -> root -> right
// 考虑“操作”是在递归的什么位置进行
function midOrder(root) {
  const number = [];

  function order(node) {
    if (node === null) return;

    order(node.left);

    // 插入位置在左边节点入栈之后，右节点入栈之前
    // 所以打印的顺序应该是左边出栈打印，然后再右边入栈打印
    number.push(node.val);
    order(node.right);
  }
  
  return number;
}