// test/models/chats.js

chai = require("chai");

ChatsRepository = require("../../repositories/chats.pg");
chatsRepository = new ChatsRepository();

describe("Chat TDD", () => {
  var expect = chai.expect;
  let id;

  // ***************************************************************************************************

  /*
   * Test 1 :
   * init test : à compléter
   */
  it("Init", (done) => {
    expect(true).to.equal(true);
    done();
  });

  // ***************************************************************************************************
});
