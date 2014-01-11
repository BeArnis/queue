function queue_init() {
  var queue = {
    front: -1,
    back: -1,
    length: 0,
    storage: [],
    enqueue: function (item) {
      if (item === undefined) {
        return;
      }
      if (this.front === -1) {
        this.front = 0;
      }
      this.length += 1;
      this.back += 1;
      this.storage[this.back] = item;
      return this.storage;
    },
    dequeue: function () {
      if (this.length === 0) {
        return "error";
      }
      this.length  -= 1;
      var m = this.storage[this.front];
      this.front += 1;
      return m;
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