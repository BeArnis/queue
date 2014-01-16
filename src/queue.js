function queue_init() {
  queue = {
    front: "null",
    back: "null",
    length: 0,
    current: "null",
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
      this.current = this.front;
      this.front = this.front.next;
      this.front.previous = "null";
      this.current.next = "null";
      if(this.front === "null") {
        this.back = "null";
      }
      this.length -= 1;
      return m;
    },
    delete_queue: function () {
      for (var i = 0; this.length !== 0; i++) {
        this.current = this.front;
        this.front = this.front.next;
        this.front.previous = "null";
        this.current.next = "null";
        if(this.front === "null") {
          this.back = "null";
        }
        this.length -= 1;
       }
    }
  };
  return queue;
}