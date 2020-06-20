/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.cap = capacity;
  this.cache = new Map();
  this.count = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.get(key)) {
    return -1;
  } else {
    const refresh = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, refresh);
    return this.cache.get(key);
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.cache.has(key)) {
    this.count++;
    if (this.count > this.cap) {
      let tempCount;
      console.log('delete last cache');
      this.cache.delete(this.cache.keys().next().value);
    }
  } else {
    this.cache.delete(key);
  }
  this.cache.set(key, value);
  console.log(this.cache);
};

let obj = new LRUCache(2);
obj.put(1, 1);
obj.put(2, 2);
obj.get(2);
obj.put(3, 3);
obj.get(2);
obj.put(4, 4);
obj.get(1);
obj.get(3);
obj.get(4);
