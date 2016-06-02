var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    for(var i = 1; i < Object.keys(storage).length; i++) {
      storage[Object.keys(storage)[i + 1]] =
      storage[Object.keys(storage)[i]];
    }
    storage[Object.keys(storage)[0]] = value;
    count++;
  };

  someInstance.dequeue = function(){
    var dequeuedElement = storage[Object.keys(storage)[Object.keys(storage).length - 1]];
    delete storage[Object.keys(storage)[Object.keys(storage).length - 1]];
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
