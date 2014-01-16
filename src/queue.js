function queue_init() {
  queue = {
    front: null,
    back: null,
    length: 0,
    is_empty: function () {
      if (this.length > 0) {
        return false;
      }
      return true;
    },
    enqueue: function (item) {
      var node = {
            value: item,
            previous: this.back,
            next: null,
      };
      this.front = node;
      this.back = node;
      this.length +=1;
    },
    dequeue: function () {
      if (this.length === 0) {
        return "error";
      }
      var m = this.back.value;
      this.back.previous = this.back;
      this.back.next = null;
      this.length -= 1;
      return m;
    }
  };
  return queue;
}