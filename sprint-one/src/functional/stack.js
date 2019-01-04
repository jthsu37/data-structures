var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var keyCounter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[keyCounter] = value;
    size++;
    keyCounter++;
  };

  someInstance.pop = function() {
    var tempValues = Object.values(someInstance);
    var tempKeys = Object.keys(someInstance);


    var poppedValue = someInstance[tempKeys[tempKeys.length-4]];
    delete someInstance[tempKeys[tempKeys.length-4]];
    size--;
    return poppedValue;
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    } else {
      return size;
    }
  };

  return someInstance;
};
