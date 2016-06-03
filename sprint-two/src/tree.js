var Tree = function(value){
  debugger;
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = newTree.childNodes;  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){

  // this.children.push(value);
  // console.log(this.children);

};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
