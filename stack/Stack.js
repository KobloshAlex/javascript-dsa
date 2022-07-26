class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.bottom = newNode;
    this.length++;
  }
  pop() {
    if (!this.top) return null;

    if (this.top === this.bottom) this.bottom = null;

    this.top = this.top.next;
    this.length--;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.bottom);

console.log(stack.peek());
console.log(stack.isEmpty());
