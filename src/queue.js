function queue_init() {
  queue = {
    front: "null",
    back: "null",
    length: 0,
    is_empty: function () {
      if (this.length > 0) {
        return false;
      }
      return true;
    },
    enqueue: function (item) {
      if (item === undefined) {
        return;
      }
      var node = {
            value: item,
            previous: "null",
            next: "null",
      };
      if(this.back !== "null") {
          this.back.next = node;
      }
      if(this.front == "null") {
        this.front = node;
      }
      this.front.previous = this.back;
      this.back = node;
      this.length +=1;
    },
    dequeue: function () {
      if (this.length === 0) {
        return "error";
      }
      var m = this.front.value;
      this.front = this.front.next;
      this.front.previous = "null";
      if(this.front === "null") {
        this.back = "null";
      }
      this.length -= 1;
      return m;
    }
  };
  return queue;
}