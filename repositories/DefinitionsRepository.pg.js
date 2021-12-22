const Definition = require("../models").Definition;
module.exports = class DefinitionsRepository {
  async create(formData) {
    return await new Promise((resolve, reject) => {
      Definition.create(formData)
        .then((definition) => {
          resolve(definition);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async readeAll() {
    return await new Promise((resolve, reject) => {
      Definition.findAll()
        .then((definitions) => {
          resolve(definitions);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async readeById(id) {
    return await new Promise((resolve, reject) => {
      Definition.findOne({ where: { id } })
        .then((definition) => {
          resolve(definition);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async update(id, formData) {
    return await new Promise((resolve, reject) => {
      this.readeById(id)
        .then((definition) => {
          resolve(definition.update(formData));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async delete(id) {
    return await new Promise((resolve, reject) => {
      this.readeById(id)
        .then((definition) => {
          resolve(definition.destroy());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
