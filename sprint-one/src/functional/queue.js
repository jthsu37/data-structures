var Queue = function() {
  var someInstance = {};
  var sizeCount = 0;
  var keyCounter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var temp = keyCounter;
    someInstance[temp] = value;
    sizeCount++;
    keyCounter++;
  };

  someInstance.dequeue = function() {
    var tempKeys = Object.keys(someInstance);
    var shiftValue = someInstance[tempKeys[0]];
    delete someInstance[tempKeys[0]];
    sizeCount--;
    return shiftValue;
  };

  someInstance.size = function() {
    if (sizeCount < 0) {
      return 0;
    } else {
      return sizeCount;
    }
  };

  return someInstance;
};
