class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.sizeCount = 0;
    this.keyCount = 0;
  }

  get pusher() {
    return this.push();
  }
  get popper() {
    return this.pop(value);
  }
  get sizer() {
    return this.size();
  }

  push(value) {
    var temp = this.keyCount;
    this[temp] = value;
    this.keyCount++;
    this.sizeCount++;
  }
  pop() {
    var tempKeys = Object.keys(this);
    var poppedValue = this[tempKeys[tempKeys.length - 3]];
    delete this[tempKeys[tempKeys.length - 3]];
    this.sizeCount--;
    return poppedValue;
  }
  size() {
    if (this.sizeCount < 0) {
      return 0;
    } else {
      return this.sizeCount;
    }
  }
}