// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var tempKeys = Object.keys(this);
  if (tempKeys.includes(node.toString())) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this) {
    if (Array.isArray(this[key])) {
      if (this[key].includes(node)) {
        var index = this[key].indexOf(node);
        this[key].splice(index, 1);
      }
    }
  }

  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode].includes(toNode) && this[toNode].includes(fromNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(parseInt(toNode));
  if (fromNode !== toNode) {
    this[toNode].push(parseInt(fromNode));
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromIndex = this[fromNode].indexOf(toNode);
  var toIndex = this[toNode].indexOf(fromNode);

  this[fromNode].splice(fromIndex, 1);
  this[toNode].splice(toIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  console.log(this)
  for (var key in this) {
    if (Array.isArray(this[key]) && typeof key === 'string'){
     cb(key);
    }
  }
};