class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.length;
  }

  delete(item) {
    const lastItem = this.data[item];
    this._shiftItems(item);

    return lastItem;
  }

  _shiftItems(item) {
    for (let i = item; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new Array();

arr.push("Hello");
arr.push("you");
arr.push("!");

arr.delete(1);

console.log(arr);
