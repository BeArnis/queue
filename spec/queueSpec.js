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
    expect(myqueue.front).toEqual(-1);
  });
  it(" should have properties back", function () {
    expect(myqueue.back).toEqual(-1);
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
  it(" should have method is_empty", function () {
    expect(typeof (myqueue.is_empty)).toEqual("function");
  });
  it(" is_empty should return true if nothing has been done the Queue", function () {
    expect(myqueue.is_empty()).toEqual(true);
  });
  it(" length should be 1, back shouldbe 0, fron should be 0 after one element has been put in", function () {
    myqueue.enqueue(9);
    expect(myqueue.length).toEqual(1);
    expect(myqueue.back).toEqual(0);
    expect(myqueue.front).toEqual(0);
  });
  it(" is_empty should return false after one we have put in something", function () {
    myqueue.enqueue(7);
    expect(myqueue.is_empty()).toEqual(false);
  });
});