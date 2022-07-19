class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.lenght = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.lenght++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.lenght++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode.next !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);

    if (index > this.lenght) {
      this.append(value);
      return this;
    }

    let insertNode = new Node(value);
    let cur = this.head;

    for (let i = 0; i <= index; i++) {
      console.log(i);
      if (i === index - 1) {
        insertNode.next = cur.next;
        cur.next = insertNode;
        this.lenght++;
      }
      cur = cur.next;
    }
    return cur;
  }

  remove(index) {
    let cur = this.head;
    let prev;

    if (index === 0) {
      let tmpHead = this.head;
      this.head = tmpHead.next;
      this.lenght--;
      return;
    }

    for (let i = 0; i <= index; i++) {
      if (i === index) {
        prev.next = cur.next;
        this.lenght--;
      }
      prev = cur;
      cur = cur.next;
    }
  }
}

const ll = new LinkedList(0);

ll.append(5);
ll.append(10);

ll.append(15);
ll.append(20);
ll.append(25);
ll.append(30);
console.log(ll.remove(0));

console.log(ll.printList());
