var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance.storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    var dequeuedElement = someInstance.storage[0];
    delete someInstance.storage[0];
    for(var key in someInstance.storage) {
      someInstance.storage[key - 1] = someInstance.storage[key];
    }
    if(count > 0) {
    count--;
    }
    return dequeuedElement;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
