// 多叉树的前序遍历
class TreeNode {
  constructor(value, children = []){
    this.val = value;
    this.children = children;
  }
}

// 构造一个数
const root = new TreeNode(1)
root.children.push(new TreeNode(3), new TreeNode(2), new TreeNode(4));
root.children[0].children.push(new TreeNode(5), new TreeNode(6));
console.log(root);

// 前序遍历
// 父节点最先遍历
function preOrder(root) {
  let number = [];
  // 注意迭代和递归的顺序
  // 1. 需要函数return之后才会结束，也就是到了某一个分支，没有子节点，然后才会去找兄弟节点的下一个节点
  function order(node) {
    if (node === null) return;

    number.push(node.val);

    node.children.forEach((child) =>{
      order(child)
    })
  }

  order(root);
  
  return number;
}

console.log(preOrder(root))

// 后序遍历
// 父节点最后遍历
function postOrder(root) {
  let number = [];

  function order(node){
    if (node === null) {
      return;
    }

    node.children.forEach(child => {
      order(child);
    })

    // 赋值操作放到递归的后面，所以操作执行的顺序就和前序遍历反过来了
    // 会在跳出执行栈的时候才执行这个操作
    // 前序遍历是进入执行栈的时候就处理响应的操作
    number.push(node.val);
  }

  order(root);

  return number;
}

console.log(postOrder(root))

// 层序遍历
// 其实遍历顺序和前序一致，只不过我们手动标识了递归过程中是处于哪一层！
function levelOrder(root) {
  let number = [];
  function order(node, level){
    if (node === null) return;
    if (!number[level]){
      number[level] = [];
    }

    console.log(node.val);
    
    number[level].push(node.val);

    node.children.forEach(child => {
      order(child, level + 1);
    })
  }

  order(root, 0);

  return number;
}
console.log(levelOrder(root));