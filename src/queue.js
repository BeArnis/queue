function queue_init() {
  var queue = {
    front: -1,
    back: -1,
    length: 0,
    storage: [],
    enqueue: function (item) {
      this.front += 1;
      this.length += 1;
      this.back += 1;
      this.storage[this.back] = item;
    },
    dequeue: function () {
    },
    is_empty: function () {
      if (this.length > 0) {
        return false;
      }
      return true;
    }
  };
  return queue;
}