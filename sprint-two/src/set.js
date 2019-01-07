var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this[item] !== item.toString()) {
    this[item] = item.toString();
  }
};

setPrototype.contains = function(item) {
  for (var key in this) {
    if (key === item) {
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
