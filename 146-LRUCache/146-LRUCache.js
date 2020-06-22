const LRUCache = function (capacity) {
  this.cap = capacity;
  this.cache = new Map();
  this.count = 0;
};

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

LRUCache.prototype.put = function (key, value) {
  if (!this.cache.has(key)) {
    this.count++;
    if (this.count > this.cap) {
      let tempCount;
      this.cache.delete(this.cache.keys().next().value);
    }
  } else {
    this.cache.delete(key);
  }
  this.cache.set(key, value);
};
