var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.sizeCount = 0;
  this.keyCount = 0;
};

Stack.prototype.push = function(value) {
  var temp = this.keyCount;
  this[temp] = value;
  this.keyCount++;
  this.sizeCount++;
};
Stack.prototype.pop = function() {
  var tempKeys = Object.keys(this);
  var poppedValue = this[tempKeys[tempKeys.length - 3]];
  delete this[tempKeys[tempKeys.length - 3]];
  this.sizeCount--;
  return poppedValue;
};
Stack.prototype.size = function() {
  if (this.sizeCount < 0) {
    return 0;
  } else {
    return this.sizeCount;
  }
};