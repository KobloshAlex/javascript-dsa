class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.lenght = 0;
  }

  peek() {
    return this.last;
  }

  // [ 2 1 ]
  enqueue(value) {
    const newNode = new Node(value);

    if (this.lenght === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.lenght++;
  }

  deque() {
    const returnValue = this.first.value;

    this.first = this.first.next;
    if (this.lenght === 1) this.last = null;
    this.lenght--;

    return returnValue;
  }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.deque())
console.log(q.deque())
console.log(q.deque())

console.log(q);
