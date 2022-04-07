/**
 * 反转链表模板
 */
function reverseChainLink(head, tail = null) {
  let cur = head;
  let prev = null

  while (cur !== tail) {
    next = cur.next;
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}

// test
function ChainNode(val) {
  this.val = val;
  this.next = null;
}

const testNode = new ChainNode(0)
let temp = testNode;

// 构造链表
for (let i = 1; i < 10; i++) {
  temp.next = new ChainNode(1);
  temp = temp.next;
}

console.log(reverseChainLink(testNode));