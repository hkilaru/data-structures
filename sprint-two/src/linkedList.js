var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    //need to save current tail
    //need to point list.tail to new tail
    //need to point previous tail to new tail
    var newTail = Node(value);
    if(list.tail && list.tail.value !== null) {
      var currentTail = list.tail;
      currentTail.next = newTail;
    }
    list.tail = newTail;
    if(list.head === null) {
      list.head = newTail;
    }

    // this.tail.next = null;
    // console.log(this.tail);
    // console.log("list :" + list)
    // console.log("node :" + this.tail.next)

  };

  list.removeHead = function(){

    if(list.head !== null) {
      var currentHead = list.head;
      list.head = currentHead.next;
    }
    return currentHead.value;
  };

  list.contains = function(target){
    var currentNode = list.head;
    var contains = false;
    var findNode = function(currentNode){
        if(currentNode) {
          if(currentNode === target || currentNode.value === target) {
            contains = true;
            return contains;
          }
          else {
              currentNode = currentNode.next;
              return findNode(currentNode);
          }
        }
        return contains;

      };
    var find = findNode(currentNode);
    return find;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// if list.tail === null, list.tail[];
//
