const Article = require("../models").Article;
module.exports = class ArticlesRepository {
  async create(formData) {
    return await new Promise((resolve, reject) => {
      Article.create(formData)
        .then((article) => {
          resolve(article);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async readeAll() {
    return await new Promise((resolve, reject) => {
      Article.findAll()
        .then((articles) => {
          resolve(articles);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async readeById(id) {
    return await new Promise((resolve, reject) => {
      Article.findOne({ where: { id } })
        .then((article) => {
          resolve(article);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async update(id, formData) {
    return await new Promise((resolve, reject) => {
      this.readeById(id)
        .then((article) => {
          resolve(article.update(formData));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async delete(id) {
    return await new Promise((resolve, reject) => {
      this.readeById(id)
        .then((article) => {
          resolve(article.destroy());
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
