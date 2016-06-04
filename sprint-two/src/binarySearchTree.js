var BinarySearchTree = function(value){
  this.value = value;
  this.left;
  this.right;
  this.fullTree = [];

};

BinarySearchTree.prototype.insert = function(value) {
  var node = new BinarySearchTree(value);
  this.fullTree.push(this);
  console.log(this.fullTree);
  var checkingNode = this.fullTree[0];

  var traverseTree = function(checkingNode) {
    if(!checkingNode.left && node.value < checkingNode.value) {
        checkingNode.left = node;
    }
    else if(!checkingNode.right && node.value > checkingNode.value) {
      checkingNode.right = node;
    }
    else {
      if(node.value < checkingNode.value) {
        return traverseTree(checkingNode.left);
      }
      else if (node.value > checkingNode.value) {
        return traverseTree(checkingNode.right);
      }
    }
  };
  traverseTree(checkingNode);
};

BinarySearchTree.prototype.contains = function(value) {
  var found = false;
  var checkingNode = this.fullTree[0];
  var traverseTree = function(checkingNode) {
    if(checkingNode.value && checkingNode.value === value) {
      found = true;
      return found;
    }
    else {
      if(checkingNode.value && (value > checkingNode.value)) {
        if(checkingNode.right) {
        traverseTree(checkingNode.right);
        }
        else {
          return found;
        }
      }
      else if(checkingNode.value && (value < checkingNode.value)) {
        if(checkingNode.left) {
          traverseTree(checkingNode.left);
        }
        else {
          return found;
        }
      }
    }
  }
  traverseTree(checkingNode);
  return found;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if(this.left) {
    this.left.depthFirstLog(callback);
  }
  if(this.right) {
  this.right.depthFirstLog(callback);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
