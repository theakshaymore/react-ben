// level 1
Array.prototype.forEachOne = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], this);
  }
};

// level 2
Array.prototype.forEachTwo = function (callback, thisContext) {
  if (typeof callback != "function") {
    throw `not a function`;
  }

  for (let i = 0; i < this.length; i++) {
    if (this.hasOwnProperty) {
      callback.call(thisContext, this[i], i);
    }
  }
};
