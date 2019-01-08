var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this[item] !== item) {
    this[item] = item;
  }
};

setPrototype.contains = function(item) {
  for (var key in this) {
    if (this[key] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 add, contains is O[n]
 remove is O[1]
 */
