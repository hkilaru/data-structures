var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  var finalO

  _.extend(obj, queueMethods);
  return obj;

};
var queueMethods = {
  storage: {},
  count: 0,
  enqueue: function(value){
    for(var i = 0; i < Object.keys(this.storage).length; i++) {
      this.storage[Object.keys(this.storage)[i + 1]] = this.storage[Object.keys(this.storage)[i]];
    }
    this.storage[Object.keys(this.storage)[0]] = value;
    this.count++;

  },
  dequeue: function(){
    var dequeuedElement = this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
    delete this.storage[Object.keys(this.storage)[Object.keys(this.storage).length - 1]];
    if(this.count > 0) {
    this.count--;
    }
    return dequeuedElement;
  },

  size: function(){
    return this.count;
  }
};
