var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
  this.storage = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);

  if (this._storage.get(index) && value[0] !== k) {
    this._storage.set(index, [value, [k, v]]);
    this.counter++;
  } else {
    this._storage.set(index, [k, v]);
    this.counter++;
  }

  if (Math.floor(this._limit * .75) === this.counter){
    for (var i = 0; i < this._limit; i++) {
      var tuple = this._storage.get(i);
      this.storage.push(tuple);
    }

    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);

    for (var j = 0; j < this._limit; j++) {
      if (this.storage[j] !== undefined) {
        this._storage.set(j, [this.storage[j][0], this.storage[j][1]]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);

  if (value) {
    if (typeof value[0] === 'string') {
      return value[1];
    } else {
      for (var i = 0; i < value.length; i++) {
        if (value[i][0] === k) {
          return value[i][1];
        }
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);

  if (typeof value[0] === 'string') {
    this._storage.set(index);
    this.counter--;
  } else {
    for (var i = 0; i < value.length; i++) {
      if (value[i][0] === k) {
        this._storage.set(index)
        this.counter--;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert O(1)
remove, retrieve O(n)
 */

