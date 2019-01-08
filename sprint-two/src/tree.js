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
  var found = false;
  var recursion = function(target, tree) {
    if (tree.value === target) {
      found = true;
    } else if (tree.children) {
      for (var i = 0; i < tree.children.length; i++) {
        recursion(target, tree.children[i]);
      }
    }
  }
  recursion(target, this);
  return found;
};

/*
 Complexity: What is the time complexity of the above functions?
 addChild O(1)
 contains O(n)
 */