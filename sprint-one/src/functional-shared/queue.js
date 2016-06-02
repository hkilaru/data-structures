var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _.extend(obj, queueMethods);
  return obj;

};
var queueMethods = {
  count: 0,
  enqueue: function(value){
    var keyArray = Object.keys(this);
    console.log(keyArray);
    for(var i = 0; i < Object.keys(this).length; i++) {
      this[Object.keys(this)[i + 1]] = this[Object.keys(this)[i]];
    }
    console.log(keyArray);
    Object.keys(this).unshift("newValue");
    this["newValue"] = value;
    this.count++;

  },
  dequeue: function(){
    var dequeuedElement = this[Object.keys(this)[Object.keys(this).length - 1]];
    delete this[Object.keys(this)[Object.keys(this).length - 1]];
    if(this.count > 0) {
    this.count--;
    }
    return dequeuedElement;
  },

  size: function(){
    return this.count;
  }
};
