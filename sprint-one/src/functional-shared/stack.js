var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    sizeCount: 0,
    keyCounter: 0
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  var temp = this.keyCounter;
  this[temp] = value;
  this.keyCounter++;
  this.sizeCount++;
};
stackMethods.pop = function() {
  var tempKeys = Object.keys(this);
  var poppedValue = this[tempKeys[tempKeys.length - 6]];
  delete this[tempKeys[tempKeys.length - 6]];
  this.sizeCount--;
  return poppedValue;
};
stackMethods.size = function() {
  if (this.sizeCount < 0) {
    return 0;
  } else {
    return this.sizeCount;
  }
};