const Section = require("../models").Section;
module.exports = class SectionsRepository {
  async create(formData) {
    return await new Promise((resolve, reject) => {
      Section.create(formData)
        .then((section) => {
          resolve(section);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async readeAll() {
    return await new Promise((resolve, reject) => {
      Section.findAll()
        .then((sections) => {
          resolve(sections);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async readeById(id) {
    return await new Promise((resolve, reject) => {
      Section.findOne({ where: { id } })
        .then((section) => {
          resolve(section);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async update(id, formData) {
    return await new Promise((resolve, reject) => {
      this.readeById(id)
        .then((section) => {
          resolve(section.update(formData));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async delete(id) {
    return await new Promise((resolve, reject) => {
      this.readeById(id)
        .then((section) => {
          resolve(section.destroy());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
