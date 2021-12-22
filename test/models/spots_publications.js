// test/models/spots_publications.js

chai = require("chai");

Spots_PublicationsRepository = require("../../repositories/spots_publications.pg");
spots_publicationsRepository = new Spots_PublicationsRepository();

describe("Spots_Publications TDD", () => {
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
