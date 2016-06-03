var Tree = function(value){

  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){

  var child = Tree(value);
  child.value = value;
  this.children.push(child);

  // this.children.push(value);
  // console.log(this.children);

};

treeMethods.contains = function(target){
  var contains = false;
  var findValue = function(node) {
    if(node.value && node.value === target) {
      contains = true;
      return contains;
    }
    else {
      if(node.children) {
        for(var i = 0; i < node.children.length; i++) {
          findValue(node.children[i]);
        }
      }
    }
    return contains;
  };
  var find = findValue(this);
  return find;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
