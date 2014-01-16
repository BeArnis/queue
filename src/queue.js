function queue_init() {
  queue = {
    value: null,
    previous: null,
    next: null,
    front: null,
    back: null,
    length: 0,
    is_empty: function () {
      if (this.length > 0) {
        return false;
      }
      return true;
    },
  };
  return queue;
}