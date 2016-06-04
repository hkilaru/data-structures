

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
    if(this.nodes[i].name === fromNode || (fromNode.name && this.nodes[i].name === fromNode.name)) {
      this.nodes[i].edges.push(toNode);
    }
    if(this.nodes[i].name === toNode) {
      this.nodes[i].edges.push(fromNode);
    }
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //iterate through node array
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].name === fromNode) {
      for(var j = 0; j < this.nodes[i].edges.length; j++) {
        if(this.nodes[i].edges[j] === toNode) {
          var edge1 = this.nodes[i].edges.splice(j, j + 1);
        }
      }
    }
    if(this.nodes[i].name === toNode) {
      for(var j = 0; j < this.nodes[i].edges.length; j++) {
        if(this.nodes[i].edges[j] === fromNode) {
          var edge2 = this.nodes[i].edges.splice(j, j + 1);
        }
      }
    }
  }

  //look for fromNode
  //iterate through fromNode's edge array
  //once toNode is found, remove it from fromNode's edge array

};

Graph.prototype.forEachNode = function(cb){
  debugger;
  for(var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
    console.log(this.nodes);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
