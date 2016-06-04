var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];

  //if 75% of limit is reached, must double size
  //check if collision occur

  // if(this._count >= (0.75 * this._limit)){
  //   this._limit = this._limit * 2;
  //   var redistribute = function(tuple) {
  //     var key = tuple[0];
  //     i = getIndexBelowMaxForKey(key, this._limit);
  //     this._storage[i] = tuple;
  //     //After resize, each existing index will change
  //   }
  //   this._storage.forEach(redistribute);
  //   //increase count by one
  //   this._count++;
  // }

  // else {
  if(this._storage[i] !== undefined) { // if collision
    var bucket = [];
    var existingTuple = [this._storage[i][0], this._storage[i][1]];
    bucket.push(existingTuple, tuple);
    this._storage[i] = bucket;
  }
  else {
    this._storage[i] = tuple;
    this._count++;
  }
  // }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i] && Array.isArray(this._storage[i][1])) {
    var flatArray;
    this._storage[i].reduce(function(a, b) {
      flatArray = a.concat(b);
    });
    for(var i = 0; i < flatArray.length; i++) {
      if(flatArray[i] === k) {
        return flatArray[i + 1];
      }
    }
  }
  else {
    var target = this._storage[i][1];
    return target;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i][1] = null;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
