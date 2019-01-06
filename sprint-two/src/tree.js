var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push({value: value, children: [], addChild: this.addChild, contains: this.contains});
};

treeMethods.contains = function(target) {
  var stringTree = JSON.stringify(this);

  for (var i = 0; i < stringTree.length; i++) {
    if (target.toString() === stringTree[i]) {
      return true;
    }
  }
  return false;
};



/*
 Complexity: What is the time complexity of the above functions?
 addChild O(1)
 contains O(n)
 */