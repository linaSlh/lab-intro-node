class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    let index = 0;
    for (let i = 0; i < this.length; i++) {
      if (item > this.items[i]) {
        index = i + 1;
      } else {
        break;
      }
    }

    this.items.splice(index, 0, item);

    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= 0 && pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
  }}

  max() { 
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }

    let highest = this.items[0];
    for (let i = 1; i < this.length; i++) {
      if (highest < this.items[i]) {
        highest = this.items[i];
        return highest;
      }
    }

  }

  min() {
    if (this.length === 0) {
    throw new Error("EmptySortedList");
  }

  let lowest = this.items[0];
  for (let i = 1; i < this.length; i++) {
    if (lowest > this.items[i]) {
      lowest = this.items[i];
    }
  }
  return lowest;
  }

  sum() {}

  avg() {}
}
const sortedList = new SortedList();
sortedList.add(2);
sortedList.add(5);
sortedList.add(7);

console.log(sortedList.min());

module.exports = SortedList;
