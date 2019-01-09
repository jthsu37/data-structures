var BinarySearchTree = function(value) {
  var tree = Object.create(searchMethods);
  tree.value = value;

  return tree;
};


var searchMethods = {};

searchMethods.insert = function(value) {
  var recursion = function(value, tree) {
    if (value < tree.value) {
      if (tree.left) {
        recursion(value, tree.left);
      } else {
        tree.left = {value: value};
      }
    } else if (value > tree.value) {
      if (tree.right) {
        recursion(value, tree.right);
      } else {
        tree.right = {value: value};
      }
    }
  };

  recursion(value, this);
};

searchMethods.contains = function(value) {
  var recursion = function(value, tree) {
    if (tree.value === value) {
      return true;
    } else if (tree.value > value) {
      if (tree.left) {
        return recursion(value, tree.left);
      } else {
        return false;
      }
    } else {
      if (tree.right) {
        return recursion(value, tree.right);
      } else {
        return false;
      }
    }
  }

  return recursion(value, this);
};

searchMethods.depthFirstLog = function(cb) {
  var recursion = function(cb, tree) {
    cb(tree.value);

    if (tree.left) {
      recursion(cb, tree.left);
    }
    if (tree.right) {
      recursion(cb, tree.right);
    }
  }

  recursion(cb, this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 .insert, contains, depthFirstLog O(n)
 */
