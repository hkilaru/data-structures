var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);

};

setPrototype.contains = function(item){
  var found = false;
  for(var i = 0; i < this._storage.length; i++) {
    if(this._storage[i] === item) {
      found = true;
      return found;
    }
  }
  return found;
};

setPrototype.remove = function(item){
  for(var i = 0; i < this._storage.length; i++) {
    if(this._storage[i] === item) {
      var removedItem = this._storage.splice(i, i+1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
