const Figure = require("../models").Figure;
module.exports = class FiguresRepository {
  async create(formData) {
    return await new Promise((resolve, reject) => {
      Figure.create(formData)
        .then((figure) => {
          resolve(figure);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async readeAll() {
    return await new Promise((resolve, reject) => {
      Figure.findAll()
        .then((figures) => {
          resolve(figures);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async readeById(id) {
    return await new Promise((resolve, reject) => {
      Figure.findOne({ where: { id } })
        .then((figure) => {
          resolve(figure);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async update(id, formData) {
    return await new Promise((resolve, reject) => {
      this.readeById(id)
        .then((figure) => {
          resolve(figure.update(formData));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async delete(id) {
    return await new Promise((resolve, reject) => {
      this.readeById(id)
        .then((figure) => {
          resolve(figure.destroy());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
