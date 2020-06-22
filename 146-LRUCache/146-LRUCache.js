const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.cache = new Map();
};

LRUCache.prototype.get = function (key) {
  let value = this.cache.get(key);
  if (value === undefined) {
    return -1;
  }
  this.cache.delete(key);
  this.cache.set(key, value);
  return this.cache.get(key);
};

LRUCache.prototype.put = function (key, value) {
  if (!this.cache.has(key)) {
    if (this.count === this.capacity) {
      let old = this.cache.keys().next().value;
      this.cache.delete(old);
    } else {
      this.count++;
    }
    this.cache.set(key, value);
  } else {
    this.cache.delete(key);
    this.cache.set(key, value);
  }
};

const test = new LRUCache(2);
test.put(3, 5);
test.put(4, 1);
test.put(10, 3);
