/*global describe, it, expect, beforeEach, queue_init */
describe("Queue internal implemantation details", function () {
  var myqueue;
  beforeEach(function () {
    myqueue = queue_init();
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
});



describe("Queue", function () {
  var myqueue;
  beforeEach(function () {
    myqueue = queue_init();
  });
  it("after initiation should return something", function () {
    expect(typeof (queue_init())).toEqual("object");
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
  it(" should return and error if we try to take out element out of empty queue", function () {
    expect(myqueue.dequeue()).toEqual("error");
  });
  it(" lenght should be 0, and the value we take out should be the same one we put in", function () {
    var k = 9;
    myqueue.enqueue(k);
    var m = myqueue.dequeue();
    expect(m).toEqual(k);
    expect(myqueue.length).toEqual(0);
  });
  it(" length should be 3, fron should be 0 and back should be 2 after we have put in 3 elements", function () {
    myqueue.enqueue(9);
    myqueue.enqueue(4);
    myqueue.enqueue(2);
    expect(myqueue.length).toEqual(3);
    expect(myqueue.back).toEqual(2);
    expect(myqueue.front).toEqual(0);
  });
  it(" length should be 4, fron should be 1 and back should be 3 after we have put in 4 elements an taken out one, and the values we take out should be the same ones we have put in first", function () {
    var s1 = 9;
    var s2 = 4;
    var s3 = 2;
    var s4 = 5;
    myqueue.enqueue(s1);
    myqueue.enqueue(s2);
    myqueue.enqueue(s3);
    myqueue.enqueue(s4);
    var a1 = myqueue.dequeue();
    var a2 = myqueue.dequeue();
    expect(myqueue.length).toEqual(2);
    expect(myqueue.back).toEqual(3);
    expect(a1).toEqual(s1);
    expect(a2).toEqual(s2);
  });
  it(" should not allout to put in nonexistin values", function () {
    myqueue.enqueue();
    expect(myqueue.is_empty()).toEqual(true);
  });
  it(" checks random value input and output if all works like FIFO principle", function () {
    var s1 = 9;
    var s2 = 4;
    var s3 = 2;
    var s4 = 3;
    var s5 = 5;
    var s6 = -8;
    var s7 = -1;
    myqueue.enqueue(s1);
    myqueue.enqueue(s2);
    var a1 = myqueue.dequeue();
    myqueue.enqueue(s3);
    var a2 = myqueue.dequeue();
    myqueue.enqueue(s4);
    var a3 = myqueue.dequeue();
    var a4 = myqueue.dequeue();

    myqueue.enqueue(s5);
    var a5 = myqueue.dequeue();

    myqueue.enqueue(s6);
    myqueue.enqueue(s7);
    var a6 =  myqueue.dequeue();

    expect(myqueue.length).toEqual(1);
    expect(myqueue.back).toEqual(6);

    expect(a1).toEqual(s1);
    expect(a2).toEqual(s2);
    expect(a3).toEqual(s3);
    expect(a4).toEqual(s4);
    expect(a5).toEqual(s5);
    expect(a6).toEqual(s6);
  });
  it(" function is_empty should return true after the stack has been sanitized", function () {
    var s1 = 9;
    var s2 = 4;
    var s3 = 2;
    var s4 = 5;
    myqueue.enqueue(s1);
    myqueue.enqueue(s2);
    myqueue.enqueue(s3);
    myqueue.enqueue(s4);
    var a1 = myqueue.dequeue();
    var a2 = myqueue.dequeue();
    myqueue.sanitize_queue();
    expect(myqueue.is_empty()).toEqual(true);
  });
});