/*global describe, it, expect, beforeEach, queue_init */
describe("Queue", function () {
  var myqueue;
  beforeEach(function () {
    myqueue = queue_init();
  });
  it("after initiation should return something", function () {
    expect(typeof (queue_init())).toEqual("object");
  });
  it(" should have properties front", function () {
    expect(myqueue.front).toEqual(0);
  });
  it(" should have properties back", function () {
    expect(myqueue.back).toEqual(0);
  });
  it(" should have properties length", function () {
    expect(myqueue.length).toEqual(0);
  });
  it(" should have method enqueue", function () {
    expect(typeof (myqueue.enqueue)).toEqual("function");
  });
  it(" should have method dequeue", function () {
    expect(typeof (myqueue.dequeue)).toEqual("function");
  });
});