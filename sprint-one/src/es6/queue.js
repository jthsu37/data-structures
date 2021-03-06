class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.sizeCount = 0;
    this.keyCount = 0;
  }

  enqueue(value) {
    var temp = this.keyCount;
    this[temp] = value;
    this.sizeCount++;
    this.keyCount++;
  };

  dequeue() {
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

  size() {
    return this.sizeCount;
  };
};
