var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //list.tail.value
    list.tail = Node(value);
    if (list.head === null) {
      list.head = Node(value);
    } else {
      list.head.next = list.tail;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
    var stringList = JSON.stringify(list);
    for (var i = 0; i < stringList.length; i++) {
      if (target.toString() === stringList[i]) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 Complexity: What is the time complexity of the above functions?
 addToTail && removeHead O(1);
 contains O(n);
 */