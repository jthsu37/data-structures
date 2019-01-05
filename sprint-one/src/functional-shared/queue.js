var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.sizeCount = 0;
  someInstance.keyCount = 0;
  _.extend(someInstance, queueMethods);
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
  var shiftValue = this[tempKeys[0]];
  this.sizeCount--;
  if (tempKeys[0] !== 'sizeCount') {
    delete this[tempKeys[0]];
    return shiftValue;
  }
};

queueMethods.size = function() {
  if (this.sizeCount < 0) {
    return 0;
  } else {
    return this.sizeCount;
  }
};
