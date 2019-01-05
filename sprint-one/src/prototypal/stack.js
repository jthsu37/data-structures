var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.sizeCount = 0;
  someInstance.keyCounter = 0;

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
  var poppedValue = this[tempKeys[tempKeys.length - 3]];
  delete this[tempKeys[tempKeys.length - 3]];
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

// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var someInstance = Object.create(Stack.prototype);
//   someInstance.sizeCount = 0;
//   someInstance.keyCounter = 0;

//   return someInstance;
// };

// var stackMethods = {};


// Stack.prototype.push = function(value) {
//   var temp = this.keyCounter;
//   this[temp] = value;
//   this.keyCounter++;
//   this.sizeCount++;
// };
// Stack.prototype.pop = function() {
//   var tempKeys = Object.keys(this);
//   var poppedValue = this[tempKeys[tempKeys.length - 3]];
//   delete this[tempKeys[tempKeys.length - 3]];
//   this.sizeCount--;
//   return poppedValue;
// };
// Stack.prototype.size = function() {
//   if (this.sizeCount < 0) {
//     return 0;
//   } else {
//     return this.sizeCount;
//   }
// };