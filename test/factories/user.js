// test/factories/user.js

faker = require("faker");
models = require("../../models");

/**
 * Generate an object which container attributes needed
 * to successfully create a user instance.
 *
 * @param  {Object} props Properties to use for the user.
 *
 * @return {Object}       An object to build the user from.
 */
const data = async (props = {}) => {
  const defaultProps = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: "drt2g547847dfth588dt",
    phone: "01 23 45 67 89",
    role: "User",
    location: { type: "Point", coordinates: ["44.845992", "-0.585139"] },
  };
  return Object.assign({}, defaultProps, props);
};
/**
 * Generates a user instance from the properties provided.
 *
 * @param  {Object} props Properties to use for the user.
 *
 * @return {Object}       A user instance
 */
// export default async (props = {}) => models.Users.create(await data(props));
const userTest = async (props = {}) => models.Users.create(await data(props));

module.exports = () => ({ userTest });
