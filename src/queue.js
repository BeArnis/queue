function queue_init() {
  queue = {
    value: null,
    previous: null,
    next: null,
    front: null,
    back: null,
    length: 0
  };
  return queue;
}