var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);

  if (this._storage.get(index) && value[0] !== k) {
    this._storage.set(index, [value, [k, v]]);
  } else {
    this._storage.set(index, [k, v]);
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
  } else {
    for (var i = 0; i < value.length; i++) {
      if (value[i][0] === k) {
        this._storage.set(index)
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert O(1)
remove, retrieve O(n)
 */

