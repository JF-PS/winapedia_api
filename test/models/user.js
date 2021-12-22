// test/models/user.js

chai = require("chai");
truncate = require("../truncate");
userFactory = require("../factories/user");

UsersRepository = require("../../repositories/users.pg");
usersRepository = new UsersRepository();

describe("Users TDD", () => {
  let fakeUser = {};
  var expect = chai.expect;
  let id;

  beforeEach(async () => {
    fakeUser = {
      first_name: "test_first_name",
      last_name: "test_last_name",
      email: "test@test.com",
      password: "test",
      phone: "01 23 45 67 89",
      role: "Test",
    };
  });

  // ***************************************************************************************************

  /*
   * Test 1 :
   * Check if we can create a new user
   * @param {object} fakeUser
   * @return {object} User
   */
  it("Create User", (done) => {
    usersRepository.signUp(fakeUser).then((response) => {
      newUser = response;
      id = newUser.result.id;
      expect(newUser.result.first_name).to.be.a("string");
      expect(newUser.result.first_name).to.equal(fakeUser.first_name);
      expect(newUser.result.last_name).to.equal(fakeUser.last_name);
      expect(newUser.result.email).to.equal(fakeUser.email);
      expect(newUser.result.phone).to.equal(fakeUser.phone);
      expect(newUser.result.role).to.equal(fakeUser.role);
      done();
    });
  });

  // ***************************************************************************************************

  /*
   * Test 2 :
   * Check we can't duplicate user
   * @param {object} fakeUser
   * @return string "User already exists"
   */
  it("Can't Duplicate User", (done) => {
    usersRepository.signUp(fakeUser).then((response) => {
      newUser = response;
      expect(newUser.message).to.equal("User already exists");
      done();
    });
  });

  // ***************************************************************************************************

  /*
   * Test 3 :
   * Check we can't create user with anything
   * @param {object} fakeUser
   * @return string "Something went wrong"
   */
  it("Can't Send Anything To Create User", (done) => {
    usersRepository.signUp("WTF").then((response) => {
      newUser = response;
      expect(newUser.message).to.equal("Something went wrong");
      done();
    });
  });

  // ***************************************************************************************************

  /*
   * Test 4 :
   * Check we can delete a user
   * @param {object} fakeUser
   * @return string "Successful user deletion"
   */
  it("Delete User", (done) => {
    // Check successful delete
    usersRepository.deleteUser(id).then((response) => {
      deleteUser = response;
      expect(deleteUser.message).to.equal("Successful user deletion");
      done();
    });
  });

  // ***************************************************************************************************

  /*
   * Test 5 :
   * Check we can't delete a user, if user doesn't exist.
   * @param {object} fakeUser
   * @return string "User doesn't exist"
   */
  it("Delete User", (done) => {
    // Check successful delete
    usersRepository.deleteUser(999999999999999999).then((response) => {
      deleteUser = response;
      expect(deleteUser.message).to.equal("User doesn't exist");
      done();
    });
  });
});
