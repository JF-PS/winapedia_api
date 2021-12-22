// test/models/geolocalisations.js

chai = require("chai");

GeolocalisationsRepository = require("../../repositories/geolocalisations.pg");
geolocalisationsRepository = new GeolocalisationsRepository();

describe("Geolocalisation TDD", () => {
  var expect = chai.expect;
  let id;

  // ***************************************************************************************************

  /*
   * Test 1 :
   * init test : à compléter
   */
  it("Create Geoloc", (done) => {
    expect(true).to.equal(true);
    done();
  });

  // ***************************************************************************************************
});
