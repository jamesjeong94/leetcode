/**
 * Initialize your data structure here.
 */
const RandomizedSet = function () {
  this.list = [];
  this.obj = {};
};

RandomizedSet.prototype.insert = function (val) {
  let index = this.list.length;
  if (!this.obj.hasOwnProperty(val)) {
    this.obj[val] = index;
    this.list.push(val);
  } else {
    return false;
  }
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.obj.hasOwnProperty(val)) {
    return false;
  } else {
    let lastItemIndex = this.list.length - 1;
    let lastItem = this.list[lastItemIndex];
    let deletedIndex = this.obj[val];
    this.list[deletedIndex] = lastItem;
    this.obj[lastItem] = deletedIndex;
    delete this.obj[val];
    this.list.pop();
    return true;
  }
};

RandomizedSet.prototype.getRandom = function () {
  let length = this.list.length;
  const randomIndex = Math.floor(Math.random() * length);
  // console.log(this.list[randomIndex]);
  return this.list[randomIndex];
};

RandomizedSet.prototype.show = function () {
  console.log(this.list);
  console.log(this.obj);
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const obj = new RandomizedSet();
obj.insert(1);
obj.insert(4);
obj.insert(3);
obj.insert(9);
obj.remove(3);
obj.remove(4);
obj.show();
obj.remove(9);
obj.getRandom();
obj.show();
