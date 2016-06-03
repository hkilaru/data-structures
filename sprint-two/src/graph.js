

var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(node){
  var newNode = {};
  newNode.edges = [];
  newNode.name = node;
  this.nodes.push(newNode);

};

Graph.prototype.contains = function(node){

  var found = false ;

  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].name === node) {
      found = true;
      return found;
    }
  }
  return found;
};

Graph.prototype.removeNode = function(node){
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].name === node) {
      var spliced = this.nodes.splice(i, i + 1);
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var hasEdge = false;
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].name === fromNode) {
      for(var j = 0; j < this.nodes[i].edges.length; j++) {
        if(this.nodes[i].edges[j] === toNode) {
          hasEdge = true;
        }
      }
    }
  }
  return hasEdge;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].name === fromNode) {
      this.nodes[i].edges.push(toNode);
    }
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
