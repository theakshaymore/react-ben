// level 1
Array.prototype.forEachTwo = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], this);
  }
};
