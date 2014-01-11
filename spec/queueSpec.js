/*global describe, it, expect, beforeEach, queue_init */
describe("Queue", function () {

  it("after initiation should return something", function () {
    expect(typeof (queue_init())).toEqual("object");
  });
});