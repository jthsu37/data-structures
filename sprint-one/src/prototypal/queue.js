var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.sizeCount = 0;
  someInstance.keyCount = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var temp = this.keyCount;
  this[temp] = value;
  this.sizeCount++;
  this.keyCount++;
};

queueMethods.dequeue = function() {
  var tempKeys = Object.keys(this);
  if (this.sizeCount > 0) {
    this.sizeCount--;
  }
  if (tempKeys[0] !== 'sizeCount') {
    var shiftValue = this[tempKeys[0]];
    delete this[tempKeys[0]];
    return shiftValue;
  }
};

queueMethods.size = function() {
  return this.sizeCount;
};
