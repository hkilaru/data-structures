var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    var obj = {};
    _.extend(obj, stackMethods);
    return obj;

};

var stackMethods = {
  count: 0,
  push: function(value){
    this[this.count] = value;
    this.count++;
  },

  pop: function(){
    if(this.count > 0) {
      var result = this[--this.count];
      delete this[this.count];
      return result;
    }
  },

  size: function(){
    return this.count;
  }
};
