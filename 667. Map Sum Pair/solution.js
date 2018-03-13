const MapSum = function() {
  this.obj = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  if (this.obj[key]) {
      this.obj[key] = val;
  }
  this.obj[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let count = 0;
  for(key in this.obj) {
      if (key.startsWith(prefix)) {
          count = count + this.obj[key];
      }
  }
  return count;
};