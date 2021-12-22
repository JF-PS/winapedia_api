const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models").User;
const secret = "test";

module.exports = class UsersRepository {
  async signIn(object) {
    const { login, password } = object;

    try {
      const currentUser = await this.getByLogin(login);

      if (!currentUser) return { message: "User doesn't exist" };

      const isPasswordCorrect = await this.checkPassword(
        password,
        currentUser.password
      );

      if (!isPasswordCorrect) return { message: "Invalid credentials" };

      const token = await this.createToken(currentUser);

      return { result: currentUser, token };
    } catch (err) {
      return { message: "Something went wrong" };
    }
  }

  async signUp(object) {
    const { login, password, role } = object;

    try {
      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await this.createUser({
        login,
        password: hashedPassword,
        role,
      });

      console.log("===============================================");
      console.log(result);
      console.log("===============================================");

      const token = await this.createToken(result);

      return { result, token };
    } catch (err) {
      return { message: "Something went wrong" };
    }
  }

  async getById(id) {
    return await new Promise((resolve, reject) => {
      User.findOne({ where: { id: id } })
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async getByLogin(login) {
    return await new Promise((resolve, reject) => {
      User.findOne({
        where: { login: login },
      })
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async checkPassword(password, pass) {
    return bcrypt.compare(password, pass);
  }

  async createToken(user) {
    return jwt.sign({ email: user.email, id: user.id }, secret, {
      expiresIn: "1h",
    });
  }

  async deleteToken(user) {
    return jwt.destroy(user.token);
  }

  async createUser(object) {
    console.log(object);
    return await new Promise((resolve, reject) => {
      User.create(object)
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
};
