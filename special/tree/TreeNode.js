class TreeNode {
  constructor(value, children){
    this.val = value;
    this.children = children;
  }
}

// 多叉树的特点
const treeNode = {
  val: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 5,
          children: []
        }
      ]
    },
    {
      value: 3,
      children: [
        {
          value: 6,
          children: []
        }
      ]
    },
    {
      value: 4,
      children: []
    }
  ]
}