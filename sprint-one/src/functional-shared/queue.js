var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  _.extend(obj, queueMethods);
  return obj;

};
var queueMethods = {
  count: 0,
  enqueue: function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  dequeue: function(){
    var dequeuedElement = this.storage[0];
    delete this.storage[0];
    for(var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
     if(this.count > 0) {
       this.count--;
     }
     return dequeuedElement;
   },
  size: function(){
    return this.count;
  }
};
